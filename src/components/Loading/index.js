import React from "react";
import { ActivityIndicator } from "react-native";
import { LoadingContainer } from "./styles";

export default function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator color="#fff" size="large" />
    </LoadingContainer>
  );
}
