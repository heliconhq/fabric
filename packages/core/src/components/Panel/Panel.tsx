import React, { HTMLAttributes, ReactNode } from 'react';
import { PaddingValue, BevelValue, BreakpointValue } from '../../types/theme';
import SwitchLayer from '../SwitchLayer';
import PanelContent from './PanelPartials/PanelContent';
import PanelIcon from './PanelPartials/PanelIcon';
import PanelContainer from './PanelPartials/PanelContainer';

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  preContent?: ReactNode;
  postContent?: ReactNode;
  padding?: PaddingValue;
  bevel?: BevelValue;
  elevated?: boolean;
  reduced?: boolean;
  active?: boolean;
  borders?: boolean;
  layer?: string;
  breakAt?: BreakpointValue;
  breakBehaviour?: 'horizontal' | 'vertical' | 'both' | 'none';
};

export default function Panel({
  children,
  preContent,
  postContent,
  padding = 'standard',
  reduced = false,
  active = false,
  bevel = 'standard',
  layer: layerName,
  breakAt,
  breakBehaviour,
  ...props
}: Props) {
  return (
    <SwitchLayer layer={layerName}>
      {({ theme }) => (
        <PanelContainer
          className="fabric--panel"
          theme={theme}
          active={active}
          reduced={reduced}
          bevel={bevel}
          {...props}
        >
          {active && <PanelIcon icon="check-circle" size="1.6rem" />}
          {preContent}
          {React.Children.count(children) !== 0 && (
            <PanelContent
              breakAt={breakAt}
              breakBehaviour={breakBehaviour}
              className="fabric--panel-content"
              padding={padding}
            >
              {children}
            </PanelContent>
          )}
          {postContent}
        </PanelContainer>
      )}
    </SwitchLayer>
  );
}
