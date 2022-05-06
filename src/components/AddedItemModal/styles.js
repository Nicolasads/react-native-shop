import styled from "styled-components/native";

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.modalBackground};
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;

export const TextModalDivider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.border};
  padding: 20px;
`;

export const TextModal = styled.Text`
  color: ${(props) => props.theme.description};
  font-family: ${(props) => props.theme.semibold};
  font-size: 16px;
`;

export const CheckoutDivider = styled.View`
  align-items: center;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.button};
  padding: 20px;
  width: 80%;
  margin-top: 30px;
  border-radius: 37px;
  align-items: center;
  justify-content: center;
`;

export const CheckoutButtonText = styled.Text`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.bold};
  text-transform: uppercase;
`;
