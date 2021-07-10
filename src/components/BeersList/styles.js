import styled from "styled-components";
import theme from "constants/theme";

export const Container = styled.div`
  height: 70%;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
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
`;

export const BeerNumber = styled.div`
  min-width: 18%;
  color: ${theme.colors.white};
  font-size: 48px;
  width: 10%;
  text-align: right;
`;

export const Separator = styled.div`
  height: 100%;
  width: 1px;
  margin-left: 12px;
  margin-right: 8px;
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
  }

  h2 {
    font-size: 1.15rem;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary};
  }

  strong {
    font-family: ${theme.fonts.regular};
  }
`;

export const LoadMoreButton = styled.button`
  width: 30%;
  padding: 16px;
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
