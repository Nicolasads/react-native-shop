import React from "react";
import {
  BackButton,
  CartContainer,
  CartTitle,
  CartHeader,
  CartBody,
  CartPlaceholder,
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
import { View, FlatList } from "react-native";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../features/cart/cartSlice";

export default function Cart({ navigation }) {
  const getItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <CartContainer>
      <CartHeader>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="#85868A" />
        </BackButton>
        <CartTitle>Carrinho</CartTitle>
        <View />
      </CartHeader>
      {getItems.length === 0 ? (
        <CartNullBody>
          <CartIcon source={require("../../assets/BAG_GRAY.png")} />

          <CartNullText>Nenhum item adicionado no carrinho.</CartNullText>

          <CartNullButton onPress={() => navigation.navigate("Home")}>
            <CartNullLabel>Adicionar itens</CartNullLabel>
          </CartNullButton>
        </CartNullBody>
      ) : (
        <>
          <CartBody>
            <CartPlaceholder>Meu Carrinho</CartPlaceholder>
            <FlatList
              data={getItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CartItem item={item} />}
              style={{ marginTop: 20 }}
              showsVerticalScrollIndicator={false}
            />
          </CartBody>
          <CartFooter>
            <CartSubtotal>
              <CartSubtotalLabel>Total:</CartSubtotalLabel>
              <CartSubtotalLabel>$ {totalPrice.toFixed(2)} </CartSubtotalLabel>
            </CartSubtotal>

            <CheckoutButton onPress={() => navigation.navigate("Checkout")}>
              <CheckoutButtonText>Finalizar compra</CheckoutButtonText>
            </CheckoutButton>
          </CartFooter>
        </>
      )}
    </CartContainer>
  );
}
