import React from "react";
import {
  useWindowDimensions,
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { COLORS } from "@/constants/theme";

interface ILoader {
  isLoading: boolean | undefined;
}

const Loader = ({ isLoading = false }: ILoader) => {
  const { width, height } = useWindowDimensions();

  return (
    isLoading && (
      <View style={[styles.container, { width, height }]}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
