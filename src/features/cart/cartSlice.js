import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSliice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cart.some((item) => item.pizzaId === action.payload.pizzaId)) {
        cartSliice.caseReducers.increaseItemQuantity(state, {
          payload: action.payload.pizzaId,
        });
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.unitPrice * 1,
        });
      }
      // payload=newItem
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
      console.log(item.totalPrice);
    },
    decreaseItemQuantity(state, action) {
      // payload=itemId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        cartSliice.caseReducers.deleteItem(state, action);
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
  return state.cart.cart.reduce(
    (sum, item) => (sum = sum + item.totalPrice),
    0,
  );
}
// get currentQuantityById
export function getCurrentQuantity(state, currentId) {
  const currenItem = state.cart.cart.find((item) => item.pizzaId === currentId);

  return currenItem.quantity;
}
// getCart
export function getCart(state) {
  return state.cart.cart;
}
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  cleareCart,
} = cartSliice.actions;
export default cartSliice.reducer;
