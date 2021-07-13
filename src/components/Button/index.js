import styled from "styled-components";
import theme from "constants/theme";

export const PrimaryButton = styled.button`
  padding: 16px 32px;
  margin-bottom: 32px;
  border: none;
  border-radius: 15px;
  font-size: 1.15rem;
  font-family: ${theme.fonts.sectionHeader};
  background-color: ${theme.colors.primaryDark};
  color: ${theme.colors.white};
  transition-duration: 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
  }
`;

export const PrimaryButtonNoBg = styled(PrimaryButton)`
  background-color: unset;
  border: solid 1px ${theme.colors.white};

  &:hover {
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    background-color: unset;
  }
`;
