import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  bodyRoot: {
    marginTop: theme.spacing(3)
  }
}));

const Body = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" classes={{ root: classes.bodyRoot }}>
      {children}
    </Container>
  );
};

export default Body;
