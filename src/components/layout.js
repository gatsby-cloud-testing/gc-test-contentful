import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";

function Template(props) {
  const { children } = props;

  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
}

export default Template;
