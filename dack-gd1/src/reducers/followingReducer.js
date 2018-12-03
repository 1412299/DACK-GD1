const initFollowing = [
  {
    name: "Nguyen Anh Khoa ",
    email: "KhoaNA11",
    imageURL: "/url/image4"
  },
  {
    name: "Vu Quoc Khanh ",
    email: "KhanhVQ3",
    imageURL: "/url/image3"
  }
];
export default (state = [...initFollowing], action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
