import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBackground};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 10px;
`;

export const TextHeader = styled.Text`
  color: ${(props) => props.theme.primaryText};
  font-family: ${(props) => props.theme.bold};
  font-weight: 600;
  font-size: 20px;
`;

export const CartButton = styled.TouchableOpacity``;

export const CartIcon = styled.Image`
  transform: scale(1.25);
  margin-right: 5px;
`;

export const FilterView = styled.View`
  padding-left: 20px;
`;

export const FilterPlaceholder = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  color: ${(props) => props.theme.description};
  font-family: ${(props) => props.theme.bold};
`;

export const NewItemsContainer = styled.View`
  padding-top: 25px;
  padding-left: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.border};
`;

export const NewItemsPlaceholder = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.semibold};
  color: ${(props) => props.theme.primaryText};
`;

export const NewItemsContent = styled.ScrollView`
  margin: 12px 0px 0px;
`;

export const ItemsListContainer = styled.View``;

export const ItemsListPlaceholder = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.semibold};
  color: ${(props) => props.theme.primaryText};
  margin-top: 15px;
  margin-left: 20px;
`;

export const LoadingContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
