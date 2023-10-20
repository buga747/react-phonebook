import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  padding: 10px 20px;
  display: inline-block;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Span = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  color: ${p => p.theme.colors.btnСolorText};
  border: 1px solid ${p => p.theme.colors.white};
  padding: 8px;
  padding-left: 16px;
  border-radius: 8px;

  &:active,
  &:focus {
    outline: transparent;
  }
`;
