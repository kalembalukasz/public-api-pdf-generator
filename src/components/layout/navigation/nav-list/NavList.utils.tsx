import { ReactNode } from 'react';
import { Route } from 'types/enums/Route.enum';

export const navList = [
  {
    navElements: [
      {
        title: 'ECU',
        path: Route.ECU,
      },
      {
        title: 'HW',
        path: Route.HW,
      },
      {
        title: 'SW',
        path: Route.SW,
      },
    ],
  },
];

export interface ICurrentPage {
  icon: ReactNode;
  title: string;
}

export const DEFAULT_PAGE: ICurrentPage = {
  icon: <div />,
  title: '',
};
