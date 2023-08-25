import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./style";

import { COLORS } from "@/constants/theme";

const RateTable = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Rates</Text>
        <Pressable onPress={() => router.push("/rates")}>
          <Text style={styles.tableHeaderLink}>View all</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RateTable;
