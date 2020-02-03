import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 21px;
`;

export const TermsContainer = styled.div`
  width: 230px;
`;

export const Text = styled.span`
  font-size: 14px;
  margin-left: 10px;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 3px;
  color: #00b7bd;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 219px;
  color: #fff;
  background-color: #eeaa79;
  border: 1px solid #eeaa79;
  border-radius: 2px;
  padding: 12px 0;
`;
