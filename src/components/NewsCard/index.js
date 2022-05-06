import React from "react";
import {
  AddButton,
  CardBody,
  CardContent,
  CardFooter,
  CardImage,
  ItemCategory,
  ItemDescription,
  ItemPrice,
  ItemTitle,
} from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function NewsCard() {
  return (
    <CardContent>
      <CardImage source={require("../../assets/bolsa.png")} />
      <CardBody>
        <ItemCategory>men's clothing</ItemCategory>

        <ItemTitle>Fjallraven - Foldsack</ItemTitle>

        <ItemDescription>
          Your perfect pack for everyday use and walks in the forest.
        </ItemDescription>
      </CardBody>

      <CardFooter>
        <ItemPrice>$109.95</ItemPrice>

        <AddButton>
          <Entypo name="plus" size={14} color="#8775FE" />
        </AddButton>
      </CardFooter>
    </CardContent>
  );
}
