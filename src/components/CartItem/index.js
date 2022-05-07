import React from "react";
import { Alert } from "react-native";
import {
  AddQuantity,
  AddQuantityText,
  AdjustQuantity,
  ItemContainer,
  ItemDescription,
  ItemImage,
  ItemInfos,
  ItemPrice,
  ItemQty,
  ItemTitle,
  ItemValue,
  RemoveQuantity,
  RemoveQuantityText,
} from "./styles";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addToCart(item));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item));
    } else if (item.quantity === 1) {
      Alert.alert(
        "Remover Item",
        "Se deseja remover o item do carrinho clique em prosseguir.",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          { text: "Prosseguir", onPress: () => dispatch(removeFromCart(item)) },
        ]
      );
    }
  };

  const productSubtotal = () => {
    const subtotal = item.price * item.quantity;

    return subtotal;
  };

  return (
    <ItemContainer key={item.id}>
      <ItemInfos>
        <ItemImage source={{ uri: item.image }} />

        <ItemDescription>
          <ItemTitle numberOfLines={2}>{item.title}</ItemTitle>

          <ItemValue>
            <ItemQty>{item.quantity}x</ItemQty>
            <ItemPrice>$ {productSubtotal().toFixed(2)}</ItemPrice>
          </ItemValue>
        </ItemDescription>
      </ItemInfos>

      <AdjustQuantity>
        <RemoveQuantity onPress={() => handleDecrease()}>
          <RemoveQuantityText>
            {item.quantity === 1 ? (
              <FontAwesome5 name="trash" size={16} color="#8775FE" />
            ) : (
              <AntDesign name="minus" size={16} color="#ccc" />
            )}
          </RemoveQuantityText>
        </RemoveQuantity>

        <AddQuantity onPress={() => handleIncrease()}>
          <AddQuantityText>
            <AntDesign name="plus" size={16} color="#ccc" />
          </AddQuantityText>
        </AddQuantity>
      </AdjustQuantity>
    </ItemContainer>
  );
}
