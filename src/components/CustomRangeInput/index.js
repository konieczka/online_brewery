import React from "react";
import {
  RangeContainer,
  RangeFormWrapper,
  RangeFormRow,
  NumChangeButton,
  InputWrapper,
} from "./styles";

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
                if (minVal - step >= minLimits.min) {
                  onChangeMin(minVal - step);
                }
              }}
            >
              -
            </NumChangeButton>
            <strong>{minVal}</strong>
            <NumChangeButton
              onClick={() => {
                if (minVal + step <= minLimits.max) {
                  onChangeMin(minVal + step);
                }
              }}
            >
              +
            </NumChangeButton>
          </InputWrapper>

          {/* Maximum value input */}
          <InputWrapper>
            <NumChangeButton
              onClick={() => {
                if (maxVal - step >= maxLimits.min) {
                  onChangeMax(maxVal - step);
                }
              }}
            >
              -
            </NumChangeButton>
            <strong>{maxVal}</strong>
            <NumChangeButton
              onClick={() => {
                if (maxVal + step <= maxLimits.max) {
                  onChangeMax(maxVal + step);
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
