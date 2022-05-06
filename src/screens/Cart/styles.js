import styled from "styled-components/native";

export const CartContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBackground};
  padding: 40px 0px 0px;
  flex-direction: column;
`;

export const CartHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px;
`;

export const BackButton = styled.TouchableOpacity``;

export const CartTitle = styled.Text`
  font-family: ${(props) => props.theme.bold};
  text-transform: uppercase;
  color: ${(props) => props.theme.description};
`;

export const CartBody = styled.View`
  margin: 20px 20px 0px;
  flex: 0.8;
`;

export const CartPlaceholder = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.primaryText};
  font-family: ${(props) => props.theme.semibold};
`;

export const CartItemList = styled.ScrollView`
  margin-top: 30px;
`;

export const CartFooter = styled.View`
  flex: 0.2;
  background-color: ${(props) => props.theme.primaryBackground};
  height: auto;
`;

export const CartSubtotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${(props) => props.theme.border};
  border-bottom-color: ${(props) => props.theme.border};
  padding: 10px 20px 10px;
`;

export const CartSubtotalLabel = styled.Text`
  color: ${(props) => props.theme.primaryText};
  font-family: ${(props) => props.theme.bold};
`;

export const CheckoutButton = styled.TouchableOpacity`
  margin: 20px;
  padding: 18px;
  align-items: center;
  background-color: ${(props) => props.theme.button};
  border-radius: 37px;
`;

export const CheckoutButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.white};
`;

export const CartNullBody = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CartIcon = styled.Image``;

export const CartNullText = styled.Text`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.description};
  margin-top: 10px;
  width: 60%;
  text-align: center;
`;

export const CartNullButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.secondaryBackground};
  border-radius: 37px;
  width: 80%;
  margin: 15px 20px 10px;
  padding: 13px;
  align-items: center;
`;

export const CartNullLabel = styled.Text`
  color: ${(props) => props.theme.secondaryButton};
  font-family: ${(props) => props.theme.bold};
  text-transform: uppercase;
`;
