import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Checkout from "../screens/Checkout";
import Cart from "../screens/Cart";
import ProductCategories from "../screens/ProductCategories";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={ProductCategories} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
