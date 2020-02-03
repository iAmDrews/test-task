import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMenuItem = styled.li`
  position: relative;
  font-size: 0;
  &:first-child {
    padding-top: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 13px 15px;
  color: #8c8a86;
  outline: none;
  &:hover {
    color: #e37222;
  }
`;

export const StyledIcon = styled.i`
  font-size: 19px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const StyledArrowIcon = styled.i`
  position: absolute;
  top: 7px;
  right: 5px;
  font-size: 11px;
`;
