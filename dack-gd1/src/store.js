import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// const initialState = {
//   user: {
//     userDetail: {
//       name: "Vuong Hoang Long",
//       email: "LongVH6",
//       imageURL: "/url/image1"
//     },
//     listPost: [
//       {
//         title: "Learn ReactJS Redux",
//         description:
//           "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
//         user: {
//           name: "Nguyen Tien Dat",
//           email: "DatNT76",
//           imageURL: "/url/image2"
//         }
//       },

//       {
//         title: "Learn Block Chain",
//         description:
//           "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
//         user: {
//           name: "Nguyen Anh Khoa ",
//           email: "KhoaNA11",
//           imageURL: "/url/image4"
//         }
//       },

//       {
//         title: "Learn ReactJS Redux",
//         description:
//           "A function with a dispatch parameter The function should return an object that uses dispatch to bind action creators. Alternatively, you can use the",
//         user: {
//           name: "Vu Quoc Khanh ",
//           email: "KhanhVQ3",
//           imageURL: "/url/image3"
//         }
//       }
//     ],
//     following: [
//       {
//         name: "Nguyen Anh Khoa ",
//         email: "KhoaNA11",
//         imageURL: "/url/image4"
//       },
//       {
//         name: "Vu Quoc Khanh ",
//         email: "KhanhVQ3",
//         imageURL: "/url/image3"
//       }
//     ],

//     follower: [
//       {
//         name: "Vu Quoc Khanh ",
//         email: "KhanhVQ3",
//         imageURL: "/url/image3"
//       },
//       {
//         name: "Nguyen Tien Dat",
//         email: "DatNT76",
//         imageURL: "/url/image2"
//       }
//     ]
//   }
// };
export default function configureStore(initialState = {}) {
  return createStore(rootReducer, applyMiddleware(thunk));
}
