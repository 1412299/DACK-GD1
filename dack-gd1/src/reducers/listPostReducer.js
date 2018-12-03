const initListPost = [
  {
    title: "Learn ReactJS Redux",
    description:
      "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
    user: {
      name: "Nguyen Tien Dat",
      email: "DatNT76",
      imageURL: "/url/image2"
    }
  },

  {
    title: "Learn Block Chain",
    description:
      "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
    user: {
      name: "Nguyen Anh Khoa ",
      email: "KhoaNA11",
      imageURL: "/url/image4"
    }
  },

  {
    title: "Learn ReactJS Redux",
    description:
      "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
    user: {
      name: "Vu Quoc Khanh ",
      email: "KhanhVQ3",
      imageURL: "/url/image3"
    }
  }
];

export default (state = [...initListPost], action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
