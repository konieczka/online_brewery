import styled from "styled-components";
import theme from "constants/theme";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 16px;

  * {
    font-family: ${theme.fonts.title};
    margin: 0;
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

  @media (max-width: 700px) {
    flex-flow: row wrap;
    padding: 16px;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.25rem;
    }

    * {
      margin-right: 16px;
    }
  }
`;

export const Logo = styled.div`
  width: 128px;
  height: 128px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 700px) {
    width: 64px;
    height: 64px;
  }
`;
