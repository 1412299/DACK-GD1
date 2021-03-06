import React, { Component } from "react";
import Paper from "@material-ui/core/Paper/Paper";
import { connect } from "react-redux";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

class Following extends Component {
  render() {
    const { following } = this.props;
    return (
      <div>
        <Paper style={{ padding: 20 }}>
          <Typography component="h5" variant="h5">
            {" "}
            Following
          </Typography>
          {following.map((item, key) => {
            return (
              <CardHeader
                key={key}
                avatar={<Avatar aria-label="Recipe">R</Avatar>}
                title={item.name}
                subheader={item.email}
              />
            );
          })}
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    following: state.following
  };
};
export default connect(
  mapStateToProps,
  null
)(Following);
