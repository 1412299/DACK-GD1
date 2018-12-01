import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UserDetail from "./UserDetail";
import { Switch, Route } from "react-router-dom";

import ListProduct from "./ListPost";
import RightBar from "./RightBar";
import Following from "./Following";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "50px auto",
    width: "90%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});
class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <UserDetail />
          </Grid>
          <Grid item xs={6}>
            <Switch>
              <Route exact path="/" component={ListProduct} />
              {/* both /roster and /roster/:number begin with /roster */}
              <Route path="/following" component={Following} />
              {/* <Route path="/follower" component={Follower} /> */}
            </Switch>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <RightBar />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
