import React from 'react';
import {
  StyledMenuItem,
  StyledNavLink,
  StyledIcon,
  StyledArrowIcon
} from './NavMenuItemStyles';

interface Props {
  path: string;
  icon: string;
}

const NavMenuItem: React.FC<Props> = ({ path, icon }) => {
  return (
    <StyledMenuItem>
      <StyledNavLink
        to={path}
        activeStyle={{
          borderRight: '2px solid #e37222',
          color: '#e37222'
        }}
      >
        {path === '/order' ? <StyledArrowIcon className="icon-arrow" /> : null}
        <StyledIcon className={icon} />
      </StyledNavLink>
    </StyledMenuItem>
  );
};

export default NavMenuItem;
