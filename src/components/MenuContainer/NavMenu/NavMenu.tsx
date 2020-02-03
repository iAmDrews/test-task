import React from 'react';
import { StyledNavMenu } from './NavMenuStyles';
import { MenuItemsInterface } from '../../../types/types';
import NavMenuItem from './NavMenuItem/NavMenuItem';

interface Props {
  menuItems: MenuItemsInterface[];
}

const NavMenu: React.FC<Props> = ({ menuItems }) => {
  return (
    <React.Fragment>
      <StyledNavMenu>
        {menuItems.map(item => {
          return (
            <NavMenuItem key={item.id} path={item.path} icon={item.icon} />
          );
        })}
      </StyledNavMenu>
    </React.Fragment>
  );
};

export default NavMenu;
