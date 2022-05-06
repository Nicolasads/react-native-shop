import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 0.9;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondaryBackground};
`;

export const LoadingContent = styled.View`
  flex: 0.1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.secondaryBackground};
`;

export const LoadingText = styled.Text`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.bold};
  font-size: 16px;
`;
