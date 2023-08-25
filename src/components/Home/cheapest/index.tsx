import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./style";

import CheapestJobCards from "@/components/common/Cards/CheapestCard";
import { COLORS, SIZES, FONT } from "@/constants/theme";

const cardColors = [
  COLORS.blueOpacity,
  COLORS.redOpacity,
  COLORS.orangeOpacity,
  COLORS.greenOpacity,
];

const data = [
  {
    name: "Forex",
    sell_price: "1,200 rwf",
    percentage_change: "0.5%",
  },
  {
    name: "Bitcoin",
    sell_price: "1,200 rwf",
    percentage_change: "0.5%",
  },
  {
    name: "Bitcoin",
    sell_price: "1,200 rwf",
    percentage_change: "0.5%",
  },
  {
    name: "Ethereum",
    sell_price: "1,200 rwf",
    percentage_change: "0.5%",
  },
];

const CheapestRate = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Cheapest rates</Text>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item, index }: any) => (
            <CheapestJobCards
              item={item}
              backgroundColor={cardColors[index % cardColors.length]}
            />
          )}
          keyExtractor={(item: any) => item.market_id || item}
          contentContainerStyle={{
            paddingHorizontal: SIZES.medium,
            paddingTop: SIZES.small,
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        />
      </View>
    </View>
  );
};

export default CheapestRate;
