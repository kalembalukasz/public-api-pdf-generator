import { INavigationBasicProps } from 'components/layout/navigation/Navigation.types';

export interface INavListProps extends INavigationBasicProps {}

export interface IListGroupProps {
  $isSelected: boolean;
  $isOpen: boolean;
}
