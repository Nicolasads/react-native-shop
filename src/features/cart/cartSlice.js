import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const prodQuantity = 1;

      state.cartItems.push({
        id: action.payload.id,
        price: action.payload.price,
        title: action.payload.title,
        image: action.payload.image,
        quantity: prodQuantity,
      });
      console.log("action", action);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    getAllItems: (state, action) => {
      state.orderItems.push({
        id: action.payload.id,
        price: action.payload.price,
        quantity: action.payload.quantity,
        image: action.payload.image,
        totalPrice: action.payload.totalPrice,
      });

      console.log("itens", action.payload);
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItem) => {
    return cartItem.price + total;
  }, 0);
};

export const { addToCart, removeFromCart, getAllItems } = cartSlice.actions;

export default cartSlice.reducer;
