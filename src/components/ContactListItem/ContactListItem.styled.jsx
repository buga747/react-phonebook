import styled from 'styled-components';

export const Item = styled.li`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backgroundColors};
  font-weight: 700;
  font-style: italic;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  transition: box-shadow 250ms ease, transform 250ms ease;
  width: 260px;

  padding: 5px;
  &:hover {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.sectionShadow};
  }
`;

export const ContactNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContactNumberWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContactButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Button = styled.button`
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 3px 3px;
  border: 0;
  transition: box-shadow 250ms ease, transform 250ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.sectionShadow};
  }
`;
