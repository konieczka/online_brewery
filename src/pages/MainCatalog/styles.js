import styled from "styled-components";
import theme from "constants/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#383634, black);
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.primary};
  display: flex;
  flex-flow: column nowrap;
`;
