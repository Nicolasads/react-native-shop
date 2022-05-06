import React from "react";
import {
  AddButton,
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  ItemCategory,
  ItemPrice,
  ItemTitle,
} from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function ListCard() {
  return (
    <CardContent>
      <CardHeader>
        <CardImage source={require("../../assets/bolsa.png")} />

        <AddButton>
          <Entypo name="plus" size={14} color="#8775FE" />
        </AddButton>
      </CardHeader>

      <CardBody>
        <ItemCategory>men's clothing</ItemCategory>

        <ItemTitle>Fjallraven - Foldsack</ItemTitle>
      </CardBody>

      <CardFooter>
        <ItemPrice>$109.95</ItemPrice>
      </CardFooter>
    </CardContent>
  );
}
