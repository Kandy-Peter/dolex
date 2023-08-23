import { COLORS } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// import EditScreenInfo from "../../src/components/EditScreenInfo";

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Text className="font-bold text-md color-[#8c0e]">Dolex</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
