import { UPDATE_USER } from "../actions/actionsType";

const initUser = {
  name: "Vuong Hoang Long",
  email: "LongVH6",
  imageURL: "/url/image1"
};
export default (state = initUser, action) => {
  console.log("user Reducer", action.payload);
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
};
