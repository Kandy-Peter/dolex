import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import { SessionProvider } from "@/contexts/auth";
import { CountryProvider } from "@/contexts/countryContext";
import { useLocation } from "@/helpers/getLocation";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    DMlightLato: require("@/assets/fonts/Lato-Light.ttf"),
    DMregularLato: require("@/assets/fonts/Lato-Regular.ttf"),
    DMboldLato: require("@/assets/fonts/Lato-Bold.ttf"),
    DMblackLato: require("@/assets/fonts/Lato-Black.ttf"),
    DMAudiowide: require("@/assets/fonts/Audiowide-Regular.ttf"),
    ...FontAwesome.font,
  });

  const userLocation = useLocation();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <RootLayoutNav />
    </View>
  );
}

function RootLayoutNav() {
  return (
    <SessionProvider>
      <CountryProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            headerTitle: "",
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </CountryProvider>
    </SessionProvider>
  );
}
