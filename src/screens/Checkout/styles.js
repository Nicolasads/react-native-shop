import styled from "styled-components/native";

export const CheckoutContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondaryBackground};
`;

export const CheckoutDivider = styled.View`
  flex: 0.8;
`;

export const CheckoutInfos = styled.View`
  flex: 0.3;
`;

export const CheckoutText = styled.Text`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.white};
  text-align: center;
  font-size: 22px;
`;

export const CheckoutDescription = styled.Text`
  font-family: ${(props) => props.theme.medium};
  color: ${(props) => props.theme.white};
  text-align: center;
  margin-top: 10px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.button};
  border-radius: 37px;
  position: absolute;
  bottom: 30px;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  padding: 18px 0px 18px;
`;

export const CheckoutButtonText = styled.Text`
  font-family: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`;
