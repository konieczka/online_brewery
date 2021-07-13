import styled from "styled-components";
import theme from "constants/theme";

export const NumChangeButton = styled.button`
  border: none;

  background-color: unset;
  color: ${theme.colors.white};
  font-size: 1.5rem;
  padding-top: 8px;
  transition-duration: 200ms;
  cursor: pointer;
  margin: 8px;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const RangeContainer = styled.div`
  width: 85%;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 16px;

  strong {
    margin: auto;
    font-size: 1.5rem;
    width: 20%;
    text-align: center;
  }
`;

export const RangeFormWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
`;

export const RangeFormRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  span {
    width: 50%;
  }

  * {
    text-align: center;
  }
`;

export const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);

  strong {
    margin: 16px;
  }
`;
