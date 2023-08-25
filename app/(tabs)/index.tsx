import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import CheapestRate from "@/components/Home/cheapest";
import RateTable from "@/components/Home/tables";
import Welcome from "@/components/Home/welcome";
import { COLORS } from "@/constants/theme";

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <CheapestRate />
        <RateTable />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
