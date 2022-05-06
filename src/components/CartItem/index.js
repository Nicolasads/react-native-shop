import { View, Text } from "react-native";
import React from "react";
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
import { AntDesign } from "@expo/vector-icons";

export default function CartItem() {
  return (
    <ItemContainer>
      <ItemInfos>
        <ItemImage source={require("../../assets/bolsa.png")} />

        <ItemDescription>
          <ItemTitle>Fjallraven - Foldsack</ItemTitle>

          <ItemValue>
            <ItemQty>1x</ItemQty>
            <ItemPrice>$109.95</ItemPrice>
          </ItemValue>
        </ItemDescription>
      </ItemInfos>

      <AdjustQuantity>
        <RemoveQuantity>
          <RemoveQuantityText>
            <AntDesign name="minus" size={16} color="#ccc" />
          </RemoveQuantityText>
        </RemoveQuantity>

        <AddQuantity>
          <AddQuantityText>
            <AntDesign name="plus" size={16} color="#ccc" />
          </AddQuantityText>
        </AddQuantity>
      </AdjustQuantity>
    </ItemContainer>
  );
}
