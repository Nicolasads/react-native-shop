import styled from "styled-components/native";

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
