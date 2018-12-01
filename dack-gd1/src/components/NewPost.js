import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
class NewPost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          id="outlined-email-input"
          label="What's happening"
          className={classes.textField}
          name="What's happening"
          //   autoComplete="email"
          multiline
          margin="normal"
          variant="outlined"
          fullWidth
          style={{ margin: "0px 0px 20px 0px" }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NewPost);
