import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = ({ children }) => {
  return (
    <AppBar position="static">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default Header;
