import styled from "styled-components";
import theme from "constants/theme";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 50px 15px;

  * {
    font-family: ${theme.fonts.title};
  }

  h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    color: ${theme.colors.white};
  }

  h2 {
    font-size: 2.25rem;
    color: ${theme.colors.primary};
  }
`;
