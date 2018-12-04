import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Comment from "@material-ui/icons/Comment";
import CardMedia from "@material-ui/core/CardMedia";
import { connect } from "react-redux";
import Collapse from "@material-ui/core/Collapse";

const styles = theme => ({
  //   card: {
  //     maxWidth: 400
  //   },
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

class Post extends React.Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes, listPost } = this.props;
    console.log(listPost);
    return (
      <div>
        {listPost.map((post, key) => {
          return (
            <Card className={classes.card} key={key} style={{ margin: 20 }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.user.name}
                subheader={post.user.email}
              />
              <CardContent>
                <Typography component="h5" variant="subtitle1">
                  {post.description}
                </Typography>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1267257/pexels-photo-1267257.jpeg?cs=srgb&dl=alcoholic-beverages-bar-bartender-1267257.jpg&fm=jpg"
                  title="Paella dish"
                />
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>{" "}
                <IconButton aria-label="Comment">
                  <Comment />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {post.comment.map((item, key) => {
                    return (
                      <Typography paragraph key={key}>
                        <b>{item.user}</b>: {item.content}
                      </Typography>
                    );
                  })}
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    userDetail: state.userDetail,
    following: state.following,
    follower: state.follower,
    listPost: state.listPost
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Post));
