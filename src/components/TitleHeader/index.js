import React from "react";

import { Container, Logo } from "./styles";

const TitleHeader = ({ title, subtitle }) => (
  <Container>
    <Logo style={{ backgroundImage: "url(/brewery_logo.png)" }} />
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </Container>
);

export default TitleHeader;
