import styled from "styled-components/native";

export const ItemContainer = styled.View`
  background-color: ${(props) => props.theme.cartItem};
  border-radius: 8px;
  padding: 20px 8px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ItemInfos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemDescription = styled.View`
  padding-left: 10px;
`;

export const ItemImage = styled.Image`
  width: 38px;
  height: 50px;
  border-radius: 8px;
  margin-left: 5px;
`;

export const ItemValue = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  color: ${(props) => props.theme.black};
  font-family: ${(props) => props.theme.bold};
  font-size: 14px;
  width: 170px;
`;

export const ItemQty = styled.Text`
  color: ${(props) => props.theme.secondaryText};
  font-family: ${(props) => props.theme.bold};
  font-size: 14px;
`;

export const ItemPrice = styled.Text`
  color: ${(props) => props.theme.secondaryText};
  font-family: ${(props) => props.theme.bold};
  padding-left: 3px;
  font-size: 16px;
`;

export const AdjustQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px 13px 3px;
`;

export const AddQuantity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.secondaryButton};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 6px 12px 6px;
`;

export const AddQuantityText = styled.Text``;

export const RemoveQuantity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.secondaryButton};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 6px 12px 6px;
`;

export const RemoveQuantityText = styled.Text``;
