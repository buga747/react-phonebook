import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Form = styled.form`
  background-color: ${p => p.theme.colors.backgroundColors};
  color: ${p => p.theme.colors.colorText};
  max-width: 360px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);
  border-radius: 10px;

  @media (min-width: 400px) {
    width: 300px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;
export const Span = styled.span`
  margin-bottom: 3px;
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
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 20px;
  padding: 7px 10px;
  border: 0;
  font-size: 18px;
  transition: box-shadow 250ms ease, transform 250ms ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.sectionShadow};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 400px;
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;
    width: 100%;
  }
`;
