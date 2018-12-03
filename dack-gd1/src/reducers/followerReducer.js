const initFollower = [
  {
    name: "Vu Quoc Khanh ",
    email: "KhanhVQ3",
    imageURL: "/url/image3"
  },
  {
    name: "Nguyen Tien Dat",
    email: "DatNT76",
    imageURL: "/url/image2"
  }
];
export default (state = [...initFollower], action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
