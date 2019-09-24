import React from "react";
import { Container } from "@material-ui/core";
import "./Body.css";

const Body = ({ children }) => {
  return (
    <Container maxWidth="sm" classes={{ root: "main-body" }}>
      {children}
    </Container>
  );
};

export default Body;
