import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper/Paper";
import { updateUser } from "../actions/simpleAction";
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
  },
  button: {
    margin: theme.spacing.unit
  }
});
class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      imageURL: "/static/test"
    };
  }
  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  render() {
    const { classes, updateUser } = this.props;

    return (
      <div>
        <Paper>
          <h3> UpdateUser Component</h3>
          <form className={classes.container} noValidate autoComplete="off">
            <h5>UserName</h5>
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              // value={this.state.name}
              //   value={userDetail.name}
              onChange={e => this.handleChangeName(e)}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <h5>Email</h5>
            <TextField
              id="outlined-name"
              label="Email"
              className={classes.textField}
              onChange={e => this.handleChangeEmail(e)}
              margin="normal"
              variant="outlined"
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() =>
                updateUser({
                  name: this.state.name,
                  email: this.state.email,
                  imageURL: "/static/image"
                })
              }
            >
              Update
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userDetail: state.userDetail
  };
};
function mapDispatchToProps(dispatch) {
  return {
    updateUser: user => {
      dispatch(updateUser(user));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UpdateUser));
