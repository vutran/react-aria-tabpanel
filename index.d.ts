import * as React from 'react';

// https://github.com/davidtheclark/react-aria-tabpanel#wrapper
export interface WrapperProps extends Omit<React.HTMLProps<HTMLElement>, 'onChange'> {
  activeTabId?: string;
  letterNavigation?: boolean;
  onChange?: (newTabId: string) => void;
  tag?: React.ReactType;
}

interface Wrapper extends React.ReactElement<WrapperProps> {}
interface WrapperClass extends React.ComponentClass<WrapperProps> {}

export interface TabListProps extends React.HTMLProps<HTMLElement> {
  tag?: React.ReactType;
  role?: string;
}

interface TabList extends React.ReactElement<TabListProps> {}
interface TabListClass extends React.ComponentClass<TabListProps> {}

type TabChildrenFn = ({ isActive: boolean }) => React.ReactNode;
type TabChildren = React.ReactNode | TabChildrenFn;

// https://github.com/davidtheclark/react-aria-tabpanel#tab
export interface TabProps extends React.HTMLProps<HTMLElement> {
  children?: TabChildren;
  id: string;
  tag?: React.ReactType;
  role?: string;
  index?: number;
  active?: boolean;
  letterNavigationText?: string;
}

type TabPanelChildrenFn = ({ isActive: boolean }) => React.ReactNode
type TabPanelChildren = React.ReactNode | TabPanelChildrenFn;

// https://github.com/davidtheclark/react-aria-tabpanel#tabpanel
export interface TabPanelProps extends React.HTMLProps<HTMLElement> {
  children?: TabPanelChildren;
  tabId: string;
  active?: boolean;
  tag?: string;
  role?: string;
}

interface Tab extends React.ReactElement<TabProps> {}
interface TabClass extends React.ComponentClass<TabProps> {}
interface TabPanelClass extends React.ComponentClass<TabPanelProps> {}

export const Wrapper: WrapperClass;
export const TabList: TabListClass;
export const Tab: TabClass;
export const TabPanel: TabPanelClass;

