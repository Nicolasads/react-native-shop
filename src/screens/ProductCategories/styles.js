import styled from "styled-components/native";

export const ProductContainer = styled.View`
  flex: 1;
  padding-top: 40px;
  background-color: ${(props) => props.theme.primaryBackground};
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px;
`;

export const ProductDivider = styled.View``;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.bold};
  text-transform: uppercase;
  color: ${(props) => props.theme.description};
`;

export const CategoryResult = styled.ScrollView`
  flex: 1;
`;

export const ResultForText = styled.Text`
  font-size: 18px;
  font-family: ${(props) => props.theme.bold};
  color: ${(props) => props.theme.primaryText};
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50%;
`;

export const EmptyMessage = styled.Text`
  font-family: ${(props) => props.theme.semibold};
  color: ${(props) => props.theme.description};
  font-size: 16px;
  margin-top: 20px;
`;
