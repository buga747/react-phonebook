import { Wrapper, NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavItem to="/register">Sign Up</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </Wrapper>
  );
};
