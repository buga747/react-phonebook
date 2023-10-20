import { useAuth } from 'hooks';
import { Wrapper, Title, TextWrapper, NavItem } from './AppHome.styled';

export const AppHome = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Wrapper>
      <Title>Contacts manager📗</Title>

      {!isLoggedIn && (
        <TextWrapper>
          <p>
            To use the application you need to
            <NavItem to="/register">Sign Up</NavItem>
          </p>
          <p>
            Already registered?
            <NavItem to="/login">Login</NavItem>
          </p>
          {/* <p>Want to explore the application? Login as a Guest </p> */}
        </TextWrapper>
      )}
    </Wrapper>
  );
};
