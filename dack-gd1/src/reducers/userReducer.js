const initUser = {
  name: "Vuong Hoang Long",
  email: "LongVH6",
  imageURL: "/url/image1"
};
export default (state = initUser, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
