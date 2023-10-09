import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 20px 150px 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  z-index: 5;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  padding: 30px;
  width: 800px;
  font-size: 30px;
  margin: 0 auto;
  z-index: 5;
`;

export const NavItem = styled(NavLink)`
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  color: orangered;
  margin-left: 20px;
  transition: color 250ms ease;
  padding: 8px;
  border-radius: 16px;

  &:hover {
    color: coral;
  }
`;
