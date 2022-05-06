import styled from "styled-components/native";

export const CartContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBackground};
  padding: 40px 20px 0px;
`;

export const CartHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const CartTitle = styled.Text`
  font-family: ${(props) => props.theme.bold};
  text-transform: uppercase;
  color: ${(props) => props.theme.description};
`;

export const CartBody = styled.View`
  margin-top: 30px;
`;

export const CartPlaceholder = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.primaryText};
  font-family: ${(props) => props.theme.semibold};
`;

export const CartItemList = styled.ScrollView`
  margin-top: 30px;
`;
