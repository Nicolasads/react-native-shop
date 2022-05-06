import React from "react";
import {
  BackButton,
  CartContainer,
  CartTitle,
  CartHeader,
  CartBody,
  CartPlaceholder,
  CartItemList,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import CartItem from "../../components/CartItem";

export default function Cart({ navigation }) {
  return (
    <CartContainer>
      <CartHeader>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="#85868A" />
        </BackButton>
        <CartTitle>Carrinho</CartTitle>
        <View />
      </CartHeader>

      <CartBody>
        <CartPlaceholder>Meu Carrinho</CartPlaceholder>

        <CartItemList>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </CartItemList>
      </CartBody>
    </CartContainer>
  );
}
