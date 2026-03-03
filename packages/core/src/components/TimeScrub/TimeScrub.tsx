import { useEffect, useRef, useState, useMemo, MouseEvent } from 'react';
import TimeScrubContainer from './TimeScrubPartials/TimeScrubContainer';
import Scrubber from './TimeScrubPartials/Scrubber';
import { incrementUnitType } from './types';
import { timeValues } from './functions';

type Props = {
  increment: 1 | 5 | 15 | 20 | 30 | 60;
  incrementUnit: incrementUnitType;
  start: string;
  steps: number;
  onChange?: (value: string, position: number) => void;
};

const valueWidth = 20;

export const TimeScrub = ({
  increment = 15,
  incrementUnit = 'm',
  steps = 96,
  start = '00:00',
  onChange,
}: Props) => {
  const values = timeValues(steps, increment, incrementUnit);
  const [scrollState, setScrollState] = useState<{
    scrolling: boolean;
    scroll: number;
  }>({
    scrolling: false,
    scroll: 0,
  });

  const [value, setValue] = useState<number | undefined>(
    values.findIndex((val) => val.repr === start)
  );
  const [mouseDown, setMouseDown] = useState<'prev' | 'next' | undefined>(
    undefined
  );
  const ref = useRef<HTMLDivElement>(null);

  const width = valueWidth * values.length;

  const [hasPrev, hasNext] = useMemo(
    () => [scrollState.scroll > 0, scrollState.scroll < width - valueWidth],
    [scrollState.scroll]
  );

  const prevValue = () =>
    setScrollState((prevState) => ({
      ...prevState,
      scroll: Math.max(0, prevState.scroll - valueWidth),
    }));

  const nextValue = () =>
    setScrollState((prevState) => ({
      ...prevState,
      scroll: Math.min(width - valueWidth, prevState.scroll + valueWidth),
    }));

  useEffect(() => {
    if (ref.current) {
      const snappedValue =
        Math.round(scrollState.scroll / valueWidth) * valueWidth;
      ref.current.scrollLeft = snappedValue;
      const newValue = snappedValue / valueWidth;
      setValue(newValue);
      if (typeof onChange === 'function') {
        onChange(values[newValue].repr, newValue);
      }
    }
  }, [scrollState.scroll]);

  useEffect(() => {
    if (!mouseDown) {
      return undefined;
    }

    const move = () => {
      if (mouseDown === 'next') {
        nextValue();
      }
      if (mouseDown === 'prev') {
        prevValue();
      }
    };
    move();
    let intervalTimer: ReturnType<typeof setTimeout>;
    const timeoutTimer = setTimeout(() => {
      intervalTimer = setInterval(() => {
        move();
      }, 100);
    }, 300);

    return () => {
      clearInterval(intervalTimer);
      clearTimeout(timeoutTimer);
    };
  }, [mouseDown]);

  const onMouseDown = () => {
    setScrollState({ ...scrollState, scrolling: true });
  };

  const onMouseUp = () => {
    setScrollState({ ...scrollState, scrolling: false });
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (scrollState.scrolling) {
      const scroll = scrollState.scroll + -1 * e.movementX;
      setScrollState({
        ...scrollState,
        scroll: Math.min(width - valueWidth, Math.max(0, scroll)),
      });
    }
  };

  return (
    <TimeScrubContainer
      onMouseDown={(val) => {
        setMouseDown(val);
      }}
      onMouseUp={() => setMouseDown(undefined)}
      prevDisabled={!hasPrev}
      nextDisabled={!hasNext}
    >
      <Scrubber
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        value={value}
        values={values}
        ref={ref}
      ></Scrubber>
    </TimeScrubContainer>
  );
};

export default TimeScrub;
