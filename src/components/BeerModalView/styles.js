import theme from "constants/theme";
import styled from "styled-components";

export const BeerModalContainer = styled.div`
  width: 75%;
  height: 80%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 100;
  top: 10%;
  left: 10%;
  padding: 16px;

  * {
    margin: 0;
  }
`;

export const HeaderSection = styled.div`
  height: 15%;

  h1 {
    color: ${theme.colors.white};
    font-family: ${theme.fonts.sectionHeader};
    text-transform: uppercase;
    font-size: 2.6rem;
  }

  h2 {
    font-family: ${theme.fonts.title};
    font-size: 1.75rem;
    margin-bottom: 8px;
  }
`;

export const BeerModalBody = styled.div`
  width: 100%;
  height: 70%;
  overflow-y: scroll;

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SectionLabel = styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 1.35rem;
  font-family: ${theme.fonts.sectionHeader};
  margin-bottom: 8px;
`;

export const SectionSingleParagraph = styled.div`
  font-size: 1.05rem;
  color: ${theme.colors.white};
  margin-bottom: 8px;
  padding-left: 32px;
`;

export const SectionList = styled.ul`
  font-size: 1.05rem;
  color: ${theme.colors.white};
  margin-bottom: 8px;

  li {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    &:before {
      content: "◈";
      margin-right: 6px;
    }
  }
`;

export const ButtonsGroup = styled.div`
  margin-top: 16px;
  height: 15%;

  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SvgIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;
