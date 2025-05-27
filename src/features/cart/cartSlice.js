import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSliice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload=newItem
      state.cart.push({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.unitPrice * 1,
      });
    },
    deleteItem(state, action) {
      // payload=id
      state.cart = state.cart.filter((item) => action.payload != item.pizzaId);
    },
    increaseItemQuantity(state, action) {
      // payload=itemId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload=itemId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        cartSliice.caseReducers.deleteItem(state, action);
        console.log('u');
        console.log('u');
      }
    },
    cleareCart(state, action) {
      state.cart = [];
    },
  },
});
// get total quantity
export function getTotalQuantity(state) {
  return state.cart.cart.reduce((sum, item) => (sum = sum + item.quantity), 0);
}
// get total Price
export function getTotalPrice(state) {
  return state.cart.cart.reduce((sum, item) => (sum = sum + item.unitPrice), 0);
}
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  cleareCart,
} = cartSliice.actions;
export default cartSliice.reducer;
