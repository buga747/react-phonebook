import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const NavItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: ${p => p.theme.colors.colorText};

  &.active,
  &:hover {
    color: orangered;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 20px;
  }
`;
