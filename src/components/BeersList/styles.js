import styled from "styled-components";
import theme from "constants/theme";

export const Container = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
`;

export const BeerCard = styled.div`
  width: 85%;
  margin-bottom: 16px;
  display: flex;
  flex-flow: row nowrap;
  padding: 16px 8px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 200ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const BeerNumber = styled.div`
  min-width: 18%;
  color: ${theme.colors.white};
  font-size: 48px;
  width: 10%;
  padding-top: 18px;
  text-align: right;
`;

export const Separator = styled.div`
  min-height: 100%;
  width: 1px;
  margin: 0 20px;
  background-color: ${theme.colors.white};
`;

export const BeerDatabox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  line-height: 200%;

  h1 {
    font-family: ${theme.fonts.sectionHeader};
    color: ${theme.colors.white};
    font-size: 2rem;
    margin: 0;
  }

  h2 {
    font-size: 1.15rem;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary};
    margin: 0;
  }

  strong {
    font-family: ${theme.fonts.regular};
  }
`;
