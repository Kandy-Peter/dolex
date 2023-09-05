import { useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";

import CheapestRate from "@/components/Home/cheapest";
import RateTable from "@/components/Home/tables";
import Welcome from "@/components/Home/welcome";
import GradientBackground from "@/components/gradient";
import { COLORS } from "@/constants/theme";

export default function TabHomeScreen() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
        >
          <Welcome />
          <View style={styles.section}>
            <CheapestRate />
            <RateTable />
          </View>
        </ScrollView>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  section: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
