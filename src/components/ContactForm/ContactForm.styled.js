import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);
  border-radius: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Span = styled.span`
  margin-bottom: 2px;
  font-weight: 600;
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

export const Button = styled.button`
  display: block;
  min-width: 130px;
  height: 35px;
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 20px;
  padding: 7px 10px;
  border: 0;
  font-size: 18px;
  transition: box-shadow 250ms ease, transform 250ms ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
