import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import { Typography, IconButton, InputBase } from "@material-ui/core";
import { Search as SearchIcon, Add as AddIcon } from "@material-ui/icons";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  pageTitle: {
    marginRight: theme.spacing(4)
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const ListingHeader = ({ search, onSearchChange }) => {
  const classes = useStyles();

  return (
    <Header>
      <Typography variant="h6" classes={{ root: classes.pageTitle }}>
        Admin Tools
      </Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classNames(classes.inputInput, "listing-search-selector")
          }}
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={event => onSearchChange(event.target.value || "")}
        />
      </div>
      <div className={classes.grow}></div>
      <IconButton
        component={"a"}
        href="/new-feature"
        color="inherit"
        classes={{ root: "listing-new-feature-link-selector" }}
      >
        <AddIcon color=""></AddIcon>
      </IconButton>
    </Header>
  );
};

export default ListingHeader;
