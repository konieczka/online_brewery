import styled from "styled-components";

export const FiltersMenuModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;

  * {
    margin: 0;
  }

  button {
    margin-top: 8px;
    width: 60%;
  }
`;
