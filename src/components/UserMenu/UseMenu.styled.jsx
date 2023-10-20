import styled from 'styled-components';
import { HiOutlineLogout } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${p => p.theme.colors.colorText};
  margin-right: 8px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-right: 20px;
  }
`;

export const Icon = styled(HiOutlineLogout)`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
