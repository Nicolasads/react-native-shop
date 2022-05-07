import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { LoadingContainer, LoadingContent, LoadingText } from "./styles";

export default function AnimatedLoading() {
  const animation = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      animation.current.play();
    }
  }, []);

  return (
    <>
      <LoadingContainer>
        <LottieView
          source={require("../../assets/animated-cart.json")}
          autoplay={true}
          loop={true}
          ref={animation}
        />
      </LoadingContainer>
      <LoadingContent>
        <LoadingText> Carregando produtos da loja, aguarde... </LoadingText>
      </LoadingContent>
    </>
  );
}
