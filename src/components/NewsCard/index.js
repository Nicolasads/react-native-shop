import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import AddedItemModal from "../AddedItemModal";

export default function NewsCard({ data }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const changeModalVisible = (bool) => {
    setVisible(bool);
  };

  const addItem = (item) => {
    dispatch(addToCart(item));
    setVisible(true);
  };

  return (
    <>
      {data !== null &&
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

              <AddButton onPress={() => addItem(item)}>
                <Entypo name="plus" size={14} color="#8775FE" />
              </AddButton>
            </CardFooter>
          </CardContent>
        ))}

      <AddedItemModal visible={visible} close={changeModalVisible} />
    </>
  );
}
