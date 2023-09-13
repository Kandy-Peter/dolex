import { StyleSheet, View, ScrollView } from "react-native";

import CheapestRate from "@/components/Home/cheapest";
import RateTable from "@/components/Home/tables";
import Welcome from "@/components/Home/welcome";
import GradientBackground from "@/components/gradient";

export default function TabHomeScreen() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
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
