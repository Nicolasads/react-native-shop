import React from "react";
import { CheckoutButton, CheckoutButtonText, FooterContainer } from "./styles";

export default function CheckoutFooter() {
  return (
    <FooterContainer>
      <CheckoutButton>
        <CheckoutButtonText>Ir para carrinho</CheckoutButtonText>
      </CheckoutButton>
    </FooterContainer>
  );
}
