import React from "react";

import { Container } from "./styles";

const TitleHeader = ({ title, subtitle }) => (
  <Container>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </Container>
);

export default TitleHeader;
