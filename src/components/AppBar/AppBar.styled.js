import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid black;

  @media (min-width: 768px) {
    font-size: 28px;
    justify-content: space-around;
  }
`;
