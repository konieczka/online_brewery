import styled from "styled-components";
import theme from "constants/theme";

const Loader = styled.div`
  border: 16px solid ${theme.colors.bgDark};
  border-top: 16px solid ${theme.colors.primary};
  border-radius: 50%;
  min-width: 60px;
  min-height: 60px;
  animation: spin 1s linear infinite;
  margin-bottom: 32px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
