import React, { Fragment } from "react";
import Header from "../components/Header";
import { Typography, makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  grid: {
    height: "calc(100vh - 64px)"
  },
  leftPane: {
    backgroundColor: "#ccc"
  },
  leftContainer: {
    width: "60%",
    marginLeft: "20%",
    marginTop: 100
  },
  rightPane: {
    // Nothing yet!
  },
  rightContainer: {
    width: "40%",
    marginLeft: "30%",
    marginTop: 100
  },
  feature: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    cursor: "pointer"
  }
}));

const NewFeaturePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Header>
        <Typography variant="h6">New Features</Typography>
      </Header>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs className={classes.leftPane}>
          <div className={classes.leftContainer}>
            <Typography variant="h4">New Features</Typography>
            <Typography variant="body2">
              sdjkal fsdlkgjas dfg lkasfdjg sflkgjksafjg sdakljg safjlk
              ghsafjklgh kjsahg kjdsgkjlasfh; guf huehgajlrgh sfdj ghjksfdgakjh
            </Typography>
          </div>
        </Grid>
        <Grid item xs className={classes.rightPane}>
          <div className={classes.rightContainer}>
            <Paper className={classes.feature}>Something</Paper>
            <Paper className={classes.feature}>Another thing</Paper>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NewFeaturePage;
