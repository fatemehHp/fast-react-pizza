import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  cart: [],
};

const cartSliice = createSlice({
  name: 'cart',
  initialstate,
  reducers: {
    addItem(state, action) {
      // payload=newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload=id
      state.cart = state.cart.filter((item) => action.payload != item.id);
    },
    increaseItemQuantity(state, action) {
      // payload=itemId
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = state.quantity * state.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload=itemId
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    cleareCart(state, action) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSliice.actions;
export default cartSliice.reducers;
