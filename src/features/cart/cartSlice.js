import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cartItems.push(product);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      Toast.show({
        type: "success",
        text1: "Produto removido",
        text2: "Produto removido do carrinho.",
        position: "top",
      });
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItem) => {
    return cartItem.price * cartItem.quantity + total;
  }, 0);
};

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
