import React, { Fragment } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TableFooter,
  TablePagination,
  InputBase,
  IconButton
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Search as SearchIcon, Add as AddIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  pageTitle: {
    marginRight: theme.spacing(4)
  },
  grow: {
    flexGrow: 1
  },
  tableRoot: {
    marginTop: theme.spacing(1.5)
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

const ListingPage = ({ match }) => {
  const totalNumberOfItems = 123;
  const items = [
    { type: "t1", label: "label1" },
    { type: "t2", label: "label2" }
  ];
  const sortDirection = "desc";
  const pageSize = 10;
  const pageNumber = 0;

  const classes = useStyles();

  return (
    <Fragment>
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
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow}></div>
        <IconButton component={Link} to="/new-feature" color="inherit">
          <AddIcon color=""></AddIcon>
        </IconButton>
      </Header>
      <Body>
        <Typography variant="subtitle1">
          <strong>{totalNumberOfItems} </strong>
          item{totalNumberOfItems === 1 ? "" : "s"} found
        </Typography>
        <Paper classes={{ root: classes.tableRoot }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell sortDirection={sortDirection}>
                  <TableSortLabel
                    active={true}
                    direction={sortDirection}
                    onClick={() => {
                      alert("Not implemented.");
                    }}
                  >
                    Label
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.label}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 20]}
                  colSpan={2}
                  count={totalNumberOfItems}
                  rowsPerPage={pageSize}
                  page={pageNumber}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true
                  }}
                  onChangePage={() => {
                    alert("Not implemented.");
                  }}
                  onChangeRowsPerPage={() => {
                    alert("Not implemented.");
                  }}
                ></TablePagination>
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </Body>
    </Fragment>
  );
};

export default ListingPage;
