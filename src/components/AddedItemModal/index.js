import { Modal, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  CheckoutButton,
  CheckoutButtonText,
  CheckoutDivider,
  ModalContainer,
  TextModal,
  TextModalDivider,
} from "./styles";

export default function AddedItemModal({ visible, close }) {
  const navigation = useNavigation();

  const navigateCart = () => {
    close(false);
    navigation.navigate("Cart");
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={close}
    >
      <ModalContainer
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 8,
        }}
      >
        <TextModalDivider>
          <TextModal>Item adicionado com sucesso!</TextModal>

          <TouchableOpacity onPress={close}>
            <AntDesign name="close" size={24} color="#8775FE" />
          </TouchableOpacity>
        </TextModalDivider>

        <CheckoutDivider>
          <CheckoutButton onPress={navigateCart}>
            <CheckoutButtonText>Ir para o carrinho</CheckoutButtonText>
          </CheckoutButton>
        </CheckoutDivider>
      </ModalContainer>
    </Modal>
  );
}
