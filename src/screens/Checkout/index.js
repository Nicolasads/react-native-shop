import React, { useEffect, useRef } from "react";
import {
  CheckoutButton,
  CheckoutButtonText,
  CheckoutContainer,
  CheckoutDescription,
  CheckoutDivider,
  CheckoutInfos,
  CheckoutText,
} from "./styles";
import LottieView from "lottie-react-native";

export default function Checkout() {
  const animation = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      animation.current.play();
    }
  }, []);

  return (
    <CheckoutContainer>
      <LottieView
        source={require("../../assets/animated-success.json")}
        ref={animation}
      />
      <CheckoutDivider />

      <CheckoutInfos>
        <CheckoutText>Sucesso!</CheckoutText>

        <CheckoutDescription>
          Compra realizada com sucesso, aproveite!
        </CheckoutDescription>

        <CheckoutButton>
          <CheckoutButtonText>Prosseguir</CheckoutButtonText>
        </CheckoutButton>
      </CheckoutInfos>
    </CheckoutContainer>
  );
}
