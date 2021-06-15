import { createStore } from "redux";
import cartReducer from "./reducers";
const initialState = {
  cart: [
    // {
    //   service: {
    //     // id: 9,
    //     // name: "Analysis",
    //     // price: 200,
    //     // image:
    //     //   "https://blog.badabim.fr/wp-content/uploads/2017/02/salon-chiens-chats.jpg",
    //     // description: "",
    //   },
    //   quantity: 0,
    // },
  ],
};

const store = createStore(
  cartReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
