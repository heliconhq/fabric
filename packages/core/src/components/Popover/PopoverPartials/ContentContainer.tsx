import {
  ComponentProps,
  useState,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
} from 'react';
import { anchorPositions, positionDirections } from '../types';
import Container from './ContentContainerPartials/Container';
import useOnClickOutside from '../../../hooks/useClickOutside';

type PopoverContentProps = {
  anchor?: anchorPositions;
  contentProps?: ComponentProps<'div'>;
  onClose?: () => void;
  actuatorNode: HTMLElement | null;
  preferredPosition: positionDirections;
  onIntersection?: (showing: boolean) => void;
  withPortal?: boolean;
};

export default function PopoverContent({
  actuatorNode,
  onClose,
  preferredPosition,
  children,
  anchor = 'center',
  onIntersection,
  withPortal,
  ...props
}: PropsWithChildren<PopoverContentProps>) {
  const containerNode = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  useOnClickOutside(containerNode, () => onClose && onClose());
  useOnClickOutside(containerNode, () => onClose && onClose(), 'wheel');

  useLayoutEffect(() => {
    if (actuatorNode !== null && containerNode.current) {
      const aBox = actuatorNode.getBoundingClientRect();
      const cBox = containerNode.current.getBoundingClientRect();
      let xOffset = 0;
      let yOffset = -aBox.height;
      if (withPortal) {
        xOffset = aBox.left;
        yOffset = aBox.top;
      }
      if (anchor === 'center') {
        yOffset = -cBox.height / 2 - aBox.height / 2;
        xOffset = -(cBox.width / 2 - aBox.width / 2);
        if (withPortal) {
          xOffset = aBox.left - (cBox.width / 2 - aBox.width / 2);
          yOffset = aBox.top - (cBox.height / 2 - aBox.height / 2);
        }
      }
      if (anchor === 'end') {
        xOffset = -(cBox.width - aBox.width);
        yOffset = -cBox.height;
        if (withPortal) {
          xOffset = aBox.left - cBox.width + aBox.width;
          yOffset = aBox.top - cBox.height + aBox.height;
        }
      }

      if (preferredPosition === 'top') {
        yOffset = -(cBox.height + aBox.height);
        if (withPortal) {
          yOffset = aBox.top - cBox.height;
        }
      }
      if (preferredPosition === 'bottom') {
        yOffset = 0;
        if (withPortal) {
          yOffset = aBox.top + aBox.height;
        }
      }
      if (preferredPosition === 'right') {
        xOffset = aBox.width;

        if (withPortal) {
          xOffset = aBox.left + aBox.width;
        }
      }
      if (preferredPosition === 'left') {
        xOffset = -cBox.width;

        if (withPortal) {
          xOffset = aBox.left - cBox.width;
        }
      }
      if (withPortal) {
        if (yOffset < 0) yOffset = aBox.top + aBox.height;
        if (yOffset + cBox.height > window.innerHeight) {
          yOffset = aBox.top - cBox.height;
        }
        if (xOffset < 0) xOffset = 0;
        if (xOffset + cBox.width > window.innerWidth) {
          xOffset = window.innerWidth - cBox.width;
        }
      }
      setPosition({
        left: xOffset,
        top: yOffset,
      });
    }
  }, [preferredPosition, containerNode.current, actuatorNode]);
  useLayoutEffect(() => {
    const cb = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (onIntersection) onIntersection(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(cb, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });
    if (containerNode.current) observer.observe(containerNode.current);
    return () => {
      if (containerNode.current) observer.unobserve(containerNode.current);
    };
  }, []);

  return (
    <Container
      withPortal={withPortal}
      ref={containerNode}
      position={preferredPosition}
      positionValues={position}
      {...props}
    >
      {children}
    </Container>
  );
}
