import { combineReducers } from "redux";
// import simpleReducer from "./simpleReducer";
import userReducer from "./userReducer";
import listPostReducer from "./listPostReducer";
import followingReducer from "./followingReducer";
import followerReducer from "./followerReducer";
export default combineReducers({
  userDetail: userReducer,
  listPost: listPostReducer,
  following: followingReducer,
  follower: followerReducer
});
