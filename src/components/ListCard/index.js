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

export default function ListCard({ data }) {
  return (
    data !== null &&
    data.map((list, index) => (
      <ListContainer key={index}>
        <CardContent>
          <CardHeader>
            <CardImage source={{ uri: list.image }} />

            <AddButton>
              <Entypo name="plus" size={14} color="#8775FE" />
            </AddButton>
          </CardHeader>

          <CardBody>
            <ItemCategory> {list.category} </ItemCategory>

            <ItemTitle> {list.title} </ItemTitle>
          </CardBody>

          <CardFooter>
            <ItemPrice>$ {list.price} </ItemPrice>
          </CardFooter>
        </CardContent>
      </ListContainer>
    ))
  );
}
