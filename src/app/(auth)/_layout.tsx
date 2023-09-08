import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";

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
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign-up"
        options={{ headerShown: false, headerTitle: "" }}
      />
    </Stack>
  );
}
