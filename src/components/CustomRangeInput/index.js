import React, { useReducer } from "react";
import {
  RangeContainer,
  RangeFormWrapper,
  RangeFormRow,
  NumChangeButton,
  InputWrapper,
} from "./styles";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const valueReducer = (currentVal, action) => {
  switch (action.type) {
    case INCREMENT:
      return currentVal + action.step;
    case DECREMENT:
      return currentVal - action.step;
    case RESET:
      return action.defaultVal;
    default:
      return currentVal;
  }
};

const CustomRangeInput = ({
  label,
  maxVal,
  minVal,
  onChangeMin,
  onChangeMax,
  minLimits,
  maxLimits,
  step,
}) => {
  const [maxInputVal, setMaxInputVal] = useReducer(valueReducer, maxVal);
  const [minInputVal, setMinInputVal] = useReducer(valueReducer, minVal);

  return (
    <RangeContainer>
      <strong>{label}</strong>
      <RangeFormWrapper>
        <RangeFormRow>
          {/* Explainer headers */}
          <span>MIN</span>
          <span>MAX</span>
        </RangeFormRow>
        <RangeFormRow>
          {/* Minimum value input */}
          <InputWrapper>
            <NumChangeButton
              onClick={() => {
                if (minInputVal - step >= minLimits.min) {
                  setMinInputVal({ type: DECREMENT, step });
                  onChangeMin(minInputVal);
                }
              }}
            >
              -
            </NumChangeButton>
            <strong>{minInputVal}</strong>
            <NumChangeButton
              onClick={() => {
                if (minInputVal + step <= minLimits.max) {
                  setMinInputVal({ type: INCREMENT, step });
                  onChangeMin(minInputVal);
                }
              }}
            >
              +
            </NumChangeButton>
          </InputWrapper>

          {/* Maximum value input */}
          <InputWrapper>
            {" "}
            <NumChangeButton
              onClick={() => {
                if (maxInputVal - step >= maxLimits.min) {
                  setMaxInputVal({ type: DECREMENT, step });
                  onChangeMax(maxInputVal);
                }
              }}
            >
              -
            </NumChangeButton>
            <strong>{maxInputVal}</strong>
            <NumChangeButton
              onClick={() => {
                if (maxInputVal + step <= maxLimits.max) {
                  setMaxInputVal({ type: INCREMENT, step });
                  onChangeMax(maxInputVal);
                }
              }}
            >
              +
            </NumChangeButton>
          </InputWrapper>
        </RangeFormRow>
      </RangeFormWrapper>
    </RangeContainer>
  );
};

export default CustomRangeInput;
