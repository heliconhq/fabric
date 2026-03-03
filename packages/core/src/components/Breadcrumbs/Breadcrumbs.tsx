import React, { useState, useMemo, ReactNode, useLayoutEffect } from 'react';
import style from '../../utils/style';

import useResizeObserver from '../../hooks/useResizeObserver';
import { IconName } from '../../icons';
import Breadcrumb from './BreadcrumbPartials/Breadcrumb';

import Toggler from './BreadcrumbPartials/Toggler';
import Separator from './BreadcrumbPartials/Separator';

export type BreadcrumbType = {
  to: string;
  label: string;
  icon?: IconName;
};

type Props = {
  crumbs: BreadcrumbType[];
  from: 'start' | 'end';
  linkComponent: React.FC<{ to: string }>;
};

const StyledBreadcrumbsContainer = style('div')({
  base: {
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
  },
});

const Breadcrumbs = ({
  from = 'start',
  crumbs: crumbConfigs,
  linkComponent = ({ to, ...rest }: { to: string }) => (
    <a href={to} {...rest} />
  ),
  ...props
}: Props) => {
  const [open, setOpen] = useState(false);
  const [calculating, setCalculating] = useState(true);
  const [widths, setWidths] = useState<number[]>([]);
  const [height, setHeight] = useState<number>(0);
  const { ref, width } = useResizeObserver<HTMLDivElement>();
  const crumbs: ReactNode[] =
    crumbConfigs &&
    crumbConfigs.map((config, i) => (
      <Breadcrumb key={i} linkComponent={linkComponent} {...config} />
    ));
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    const elementWidths = Array.from(ref.current.children).map(
      (el) => el.getBoundingClientRect().width
    );
    if (calculating) {
      setWidths(elementWidths);
      setHeight(ref.current.getBoundingClientRect().height);
    }
    setCalculating(false);
  }, [ref.current?.children, crumbConfigs, from]);

  const { visible: visibleCrumbs, hidden: hiddenCrumbs } = useMemo(() => {
    if (calculating || widths.length === 0) {
      return { visible: [], hidden: [] };
    }

    if (crumbs.length === 1) {
      return { visible: [crumbs[0]], hidden: [] };
    }

    const [togglerWidth, separatorWidth, ...crumbWidths] = widths;

    return (from === 'start' ? crumbs.reverse() : crumbs).reduce(
      (
        {
          totalWidth,
          visible,
          hidden,
          maxReached,
        }: {
          totalWidth: number;
          visible: ReactNode[];
          hidden: ReactNode[];
          maxReached: boolean;
        },
        crumb,
        i: number
      ) => {
        const w =
          from === 'start'
            ? crumbWidths[crumbWidths.length - i - 1]
            : crumbWidths[i];

        if (
          i === 0 ||
          (!maxReached &&
            totalWidth + w < width - togglerWidth - separatorWidth)
        ) {
          return {
            totalWidth: totalWidth + w + separatorWidth,
            visible:
              from === 'start' ? [crumb, ...visible] : [...visible, crumb],
            hidden,
            maxReached,
          };
        }

        return {
          totalWidth,
          visible,
          hidden: from === 'start' ? [crumb, ...hidden] : [...hidden, crumb],
          maxReached: true,
        };
      },
      {
        totalWidth: togglerWidth,
        visible: [],
        hidden: [],
        maxReached: false,
      }
    );
  }, [calculating, widths, width, crumbConfigs, from]);

  return (
    <StyledBreadcrumbsContainer
      className="fabric--breadcrumbs"
      ref={ref}
      style={{ minHeight: calculating ? undefined : height }}
      {...props}
    >
      {from === 'start' && hiddenCrumbs.length > 0 && (
        <Toggler
          hiddenCrumbs={hiddenCrumbs}
          open={open}
          setOpen={setOpen}
          key="toggler"
          separatorLocation="after"
        />
      )}
      {calculating
        ? [
            <Toggler
              key="toggler"
              hiddenCrumbs={hiddenCrumbs}
              open={open}
              setOpen={setOpen}
              separatorLocation="after"
            />,
            <Separator key="sep-start" />,
            ...crumbs,
          ]
        : visibleCrumbs.map((crumb, i) =>
            i > 0 ? [<Separator key={`sep-${i}`} />, crumb] : crumb
          )}
      {from === 'end' && hiddenCrumbs.length > 0 && (
        <Toggler
          hiddenCrumbs={hiddenCrumbs}
          open={open}
          setOpen={setOpen}
          key="toggler"
          separatorLocation="before"
        />
      )}
    </StyledBreadcrumbsContainer>
  );
};

export default Breadcrumbs;
