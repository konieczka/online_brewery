import styled from "styled-components";
import theme from "constants/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#383634, #6b6661);
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.primary};
  overflow: hidden;
`;
