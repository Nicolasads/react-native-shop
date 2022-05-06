import React from "react";
import {
  BackButton,
  CartContainer,
  CartTitle,
  CartHeader,
  CartBody,
  CartPlaceholder,
  CartItemList,
  CartFooter,
  CartSubtotal,
  CartSubtotalLabel,
  CheckoutButton,
  CheckoutButtonText,
  CartNullBody,
  CartIcon,
  CartNullText,
  CartNullButton,
  CartNullLabel,
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

      {/* <CartBody>
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
      <CartFooter>
        <CartSubtotal>
          <CartSubtotalLabel>Total:</CartSubtotalLabel>
          <CartSubtotalLabel>$549.75</CartSubtotalLabel>
        </CartSubtotal>

        <CheckoutButton>
          <CheckoutButtonText>Finalizar compra</CheckoutButtonText>
        </CheckoutButton>
      </CartFooter> */}

      <CartNullBody>
        <CartIcon source={require("../../assets/BAG_GRAY.png")} />

        <CartNullText>Nenhum item adicionado no carrinho.</CartNullText>

        <CartNullButton>
          <CartNullLabel>Adicionar itens</CartNullLabel>
        </CartNullButton>
      </CartNullBody>
    </CartContainer>
  );
}
