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

export default function NewsCard({ data }) {
  return (
    data !== null &&
    data.map((item) => (
      <CardContent key={item.id}>
        <CardImage source={{ uri: item.image }} />
        <CardBody>
          <ItemCategory> {item.category} </ItemCategory>

          <ItemTitle numberOfLines={1}> {item.title} </ItemTitle>

          <ItemDescription numberOfLines={2}>
            {item.description}
          </ItemDescription>
        </CardBody>

        <CardFooter>
          <ItemPrice>$ {item.price} </ItemPrice>

          <AddButton>
            <Entypo name="plus" size={14} color="#8775FE" />
          </AddButton>
        </CardFooter>
      </CardContent>
    ))
  );
}
