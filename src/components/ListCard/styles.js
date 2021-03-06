import styled from "styled-components/native";

export const CardContent = styled.View`
  width: 160px;
`;

export const ListContainer = styled.View`
  padding: 15px 25px 0px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardHeader = styled.View``;

export const CardBody = styled.View`
  margin-top: 5px;
`;

export const CardImage = styled.Image`
  width: 155px;
  height: 140px;
  border-radius: 10px;
`;

export const ItemCategory = styled.Text`
  color: ${(props) => props.theme.secondaryText};
  font-family: ${(props) => props.theme.bold};
  font-size: 12px;
`;

export const ItemTitle = styled.Text`
  font-family: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.primaryText};
  font-size: 14px;
`;

export const ItemDescription = styled.Text`
  font-family: ${(props) => props.theme.medium};
  color: ${(props) => props.theme.description};
  font-size: 12px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 8px 5px;
`;

export const ItemPrice = styled.Text`
  color: ${(props) => props.theme.secondaryText};
  font-family: ${(props) => props.theme.bold};
  font-size: 18px;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.secondaryButton};
  border-width: 1px;
  border-radius: 80px;
  border-color: ${(props) => props.theme.secondaryBackground};
  align-items: center;
  justify-content: center;
`;
