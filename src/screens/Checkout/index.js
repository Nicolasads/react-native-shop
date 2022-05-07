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
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

export default function Checkout({ navigation }) {
  const dispatch = useDispatch();

  const animation = useRef(null);
  const firstRun = useRef(true);

  const checkoutCart = () => {
    dispatch(clearCart());

    navigation.navigate("Home");
  };

  useEffect(() => {
    if (firstRun.current) {
      animation.current.play(0, 120);
    }
  }, []);

  return (
    <CheckoutContainer>
      <LottieView
        source={require("../../assets/animated-success.json")}
        ref={animation}
        loop={false}
      />
      <CheckoutDivider />

      <CheckoutInfos>
        <CheckoutText>Sucesso!</CheckoutText>

        <CheckoutDescription>
          Compra realizada com sucesso, aproveite!
        </CheckoutDescription>

        <CheckoutButton onPress={() => checkoutCart()}>
          <CheckoutButtonText>Prosseguir</CheckoutButtonText>
        </CheckoutButton>
      </CheckoutInfos>
    </CheckoutContainer>
  );
}
