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
  ListContainer,
} from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function ListCard({ item }) {
  return (
    item !== null && (
      <ListContainer>
        <CardContent>
          <CardHeader>
            <CardImage source={{ uri: item.image }} />

            <AddButton>
              <Entypo name="plus" size={14} color="#8775FE" />
            </AddButton>
          </CardHeader>

          <CardBody>
            <ItemCategory> {item.category} </ItemCategory>

            <ItemTitle numberOfLines={2}> {item.title} </ItemTitle>
          </CardBody>

          <CardFooter>
            <ItemPrice>$ {item.price} </ItemPrice>
          </CardFooter>
        </CardContent>
      </ListContainer>
    )
  );
}
