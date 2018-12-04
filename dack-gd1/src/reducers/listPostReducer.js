const initListPost = [
  {
    title: "Learn ReactJS Redux",
    description:
      "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
    user: {
      name: "Nguyen Tien Dat",
      email: "DatNT76",
      imageURL: "/url/image2"
    },
    comment: [
      {
        id: 1,
        content: "comment 1",
        user: "dat"
      },
      {
        id: 2,
        content: "comment 2",
        user: "dat"
      }
    ]
  },

  {
    title: "Learn Block Chain",
    description:
      "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
    user: {
      name: "Nguyen Anh Khoa ",
      email: "KhoaNA11",
      imageURL: "/url/image4"
    },
    comment: [
      {
        id: 3,
        content: "comment 3",
        user: "long"
      },
      {
        id: 4,
        content: "comment 4",
        user: "khanh"
      }
    ]
  },

  {
    title: "Learn ReactJS Redux",
    description:
      "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
    user: {
      name: "Vu Quoc Khanh ",
      email: "KhanhVQ3",
      imageURL: "/url/image3"
    },
    comment: [
      {
        id: 5,
        content: "comment 5",
        user: "huy"
      },
      {
        id: 7,
        content: "comment 7",
        user: "minh"
      }
    ]
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
