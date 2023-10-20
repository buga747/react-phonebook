import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: ${p => p.theme.colors.colorText};

  &:last-child {
    margin-left: 8px;
  }

  &.active,
  &:hover {
    color: orangered;
  }

  @media (min-width: 768px) {
    font-size: 28px;

    &:last-child {
      margin-left: 20px;
    }
  }
`;
