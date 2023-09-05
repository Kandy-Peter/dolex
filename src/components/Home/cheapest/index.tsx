import { FontAwesome5 } from "@expo/vector-icons";
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
  COLORS.orangeOpacity,
  COLORS.redOpacity,
  COLORS.greenOpacity,
  COLORS.blueOpacity,
];

const Icons = [
  require("@/assets/images/trading.png"),
  require("@/assets/images/candlestick.png"),
  require("@/assets/images/change.png"),
  require("@/assets/images/cryptocurrency.png"),
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
          renderItem={({ item, index }: any) => (
            <CheapestJobCards
              item={item}
              backgroundColor={cardColors[index % cardColors.length]}
              IconUrl={Icons[index % Icons.length]}
            />
          )}
          keyExtractor={(item: any) => item.market_id || item}
          contentContainerStyle={{
            paddingHorizontal: SIZES.medium,
            paddingTop: SIZES.small,
            columnGap: SIZES.medium,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CheapestRate;
