import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
    // state.cart = [...state.cart, action.payload]
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, payload) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log("Store Create ", store.getState());

store.subscribe(() => {
  console.log("store change ", store.getState());
});

// const action1 = addToCart({id: 1, qty: 20})
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(login());
