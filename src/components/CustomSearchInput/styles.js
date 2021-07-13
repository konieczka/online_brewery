import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 85%;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 16px;
  justify-content: center;

  strong {
    margin: auto;
    font-size: 1.5rem;
    width: 20%;
    text-align: center;
  }

  input {
    width: 75%;
    height: 32px;
  }
`;
