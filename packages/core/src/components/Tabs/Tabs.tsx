import { useState, ReactNode, ReactElement } from 'react';

import { useTheme } from '../../hooks';
import { MarginValue, AppearanceValue } from '../../types/theme';
import { TabProps } from './types';
import Tab from './TabsPartials/Tab';
import TabsContainer from './TabsPartials/TabsContainer';
import Actions from './TabsPartials/Actions';

type TabsProps = {
  children: ReactElement[];
  margin?: MarginValue;
  appearance?: AppearanceValue;
  onTabChange?: (id: string) => void;
  defaultSelected?: string;
  actions?: ReactNode;
};

export default function Tabs({
  children = [],
  margin = 'standard',
  appearance = 'primary',
  onTabChange,
  defaultSelected,
  actions,
  ...props
}: TabsProps) {
  const tabs = children
    .map((c) => c.props as unknown as TabProps)
    .filter((c) => Object.keys(c).length > 0);
  if (tabs.length === 0) {
    return null;
  }
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.id === defaultSelected) || tabs[0]
  );

  const onSelect = (tab: TabProps) => {
    setActiveTab(tab);
    if (typeof onTabChange === 'function') {
      onTabChange(tab.id);
    }
  };

  return (
    <>
      <TabsContainer
        className="fabric--tabs"
        theme={theme}
        margin={margin}
        {...props}
      >
        {tabs.map((TabItem) => (
          <Tab
            key={TabItem.id}
            active={TabItem.id === activeTab.id}
            className="fabric--tab"
            theme={theme}
            appearance={appearance}
            onClick={() => onSelect(TabItem)}
          >
            {TabItem.title}
          </Tab>
        ))}
        {typeof actions !== 'undefined' && <Actions>{actions}</Actions>}
      </TabsContainer>
      {activeTab !== null &&
        typeof activeTab !== 'undefined' &&
        activeTab.children}
    </>
  );
}
