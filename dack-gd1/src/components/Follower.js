import React, { Component } from "react";
import Paper from "@material-ui/core/Paper/Paper";
import { connect } from "react-redux";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

class Follower extends Component {
  render() {
    const { follower } = this.props;
    return (
      <div>
        <Paper style={{ padding: 20 }}>
          <Typography component="h5" variant="h5">
            {" "}
            Follower
          </Typography>
          {follower.map((item, key) => {
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
    follower: state.follower
  };
};
export default connect(
  mapStateToProps,
  null
)(Follower);
