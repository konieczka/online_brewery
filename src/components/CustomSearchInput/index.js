import React from "react";
import { SearchContainer } from "./styles";

const CustomSearchInput = ({ upperLimit, value, onChange }) => {
  return (
    <SearchContainer>
      <strong>Filter by name</strong>
      <input
        type="text"
        value={value}
        onChange={onChange}
        maxLength={upperLimit}
      />
    </SearchContainer>
  );
};

export default CustomSearchInput;
