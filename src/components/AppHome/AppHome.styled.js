import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 100px 20px 150px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 30px;
    width: 800px;
    font-size: 30px;
    text-align: center;
  }
`;

export const NavItem = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: orangered;
  transition: color 250ms ease;
  padding: 8px;
  border-radius: 16px;

  &:hover {
    color: orangered;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
