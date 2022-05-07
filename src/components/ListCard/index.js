import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import AddedItemModal from "../AddedItemModal";
import { addToCart } from "../../features/cart/cartSlice";

export default function ListCard({ item }) {
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
      {item !== null && (
        <ListContainer>
          <CardContent>
            <CardHeader>
              <CardImage source={{ uri: item.image }} />

              <AddButton onPress={() => addItem(item)}>
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
      )}

      <AddedItemModal visible={visible} close={changeModalVisible} />
    </>
  );
}
