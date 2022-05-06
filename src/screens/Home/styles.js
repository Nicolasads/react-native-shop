import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBackground};
  padding: 0px 20px 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 0px;
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
  padding: 10px 0px 0px;
`;

export const FilterPlaceholder = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  color: ${(props) => props.theme.description};
  font-family: ${(props) => props.theme.bold};
`;

export const FilterList = styled.ScrollView`
  margin-top: 8px;
`;

export const FilterButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.secondaryButton};
  margin-right: 10px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.border};
  padding: 3px 8px 3px;
`;

export const FilterLabel = styled.Text`
  color: ${(props) => props.theme.label};
`;

export const NewItemsContainer = styled.View`
  padding: 25px 0px 0px;
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

export const ItemsListContainer = styled.View`
  padding: 10px 0px 0px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemsListPlaceholder = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.semibold};
  color: ${(props) => props.theme.primaryText};
  margin-top: 15px;
`;
