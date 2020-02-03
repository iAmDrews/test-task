import React from 'react';
import { StyledMenuContainer } from './MenuContainerStyles';
import NavMenu from './NavMenu/NavMenu';
import { MenuItemsInterface } from '../../types/types';

const menuItems: MenuItemsInterface[] = [
  {
    id: 1,
    path: '/order',
    icon: 'icon-order'
  },
  {
    id: 2,
    path: '/location',
    icon: 'icon-location'
  },
  {
    id: 3,
    path: '/statistic',
    icon: 'icon-statistic'
  },
  {
    id: 4,
    path: '/payments',
    icon: 'icon-payments'
  },
  {
    id: 5,
    path: '/contacts',
    icon: 'icon-contacts'
  },
  {
    id: 6,
    path: '/settings',
    icon: 'icon-settings'
  }
];

const MenuContainer = () => {
  return (
    <StyledMenuContainer>
      <NavMenu menuItems={menuItems} />
    </StyledMenuContainer>
  );
};

export default MenuContainer;
