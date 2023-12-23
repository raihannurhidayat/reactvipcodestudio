import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action){
      state.push(action.payload)
    }
  }
})

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("Store Create ", store.getState());

store.subscribe(() => {
  console.log("store change ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({id: 4, qty: 10}))