import { createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 1 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload], // payload => data yang dikirimkan
      };
    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.log("on create store", store.getState());

// subcribe
store.subscribe(() => {
  console.log("store change ", store.getState())
})

// dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 10,
  },
};
store.dispatch(action1)
