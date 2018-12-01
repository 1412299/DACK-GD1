import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, Divider } from "@material-ui/core";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});
class RightBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography component="h4" variant="h6" style={{ padding: "20px" }}>
          Who to follow
        </Typography>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          //   action={
          //     <IconButton>
          //       <MoreVertIcon />
          //     </IconButton>
          //   }
          title="Vuong Hoang Long "
          subheader={
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{ borderRadius: 30, fontSize: 8 }}
            >
              follow
            </Button>
          }
        />
        <Divider />
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title="Vuong Hoang Long"
          subheader={
            <Button
              variant="outlined"
              size="small"
              color="primary"
              style={{ borderRadius: 30, fontSize: 8 }}
            >
              follow
            </Button>
          }
        />
        <Divider />
      </div>
    );
  }
}
RightBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(RightBar);
