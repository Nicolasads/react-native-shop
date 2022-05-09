import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./src/features/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { NavigationContainer } from "@react-navigation/native";
import AnimatedLoading from "./src/components/AnimatedLoading";

import { useColorScheme } from "react-native";
import {
  useFonts,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";

import themes from "./src/styles/styled";
import Toast from "react-native-toast-message";
import Routes from "./src/routes/routes";
import Loading from "./src/components/Loading";

export default function App() {
  let persistor = persistStore(store);

  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark;

  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={<AnimatedLoading />} persistor={persistor}>
            <StatusBar style="auto" translucent={true} />
            <Routes />
            <Toast />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
