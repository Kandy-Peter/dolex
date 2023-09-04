import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

import styles from "./style";

import RateCard from "@/components/common/Cards/RateCard";
import { COLORS } from "@/constants/theme";
import useFetch from "@/hook/useFetch";

const RateTable = () => {
  const router = useRouter();

  const { data, error, isLoading } = useFetch("trades", {
    country: "rwanda",
  });

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Rates</Text>
        <Pressable onPress={() => router.push("/rates")}>
          <Text style={styles.tableHeaderLink}>View all</Text>
        </Pressable>
      </View>

      <View style={styles.tableBody}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={{ marginTop: 20 }}
          />
        ) : error ? (
          <Text>Error fetching data</Text>
        ) : (
          data?.map((item: any) => (
            <View key={item.id} style={styles.tableRow}>
              <RateCard item={item} />
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default RateTable;
