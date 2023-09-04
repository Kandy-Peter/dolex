import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";

import styles from "./style";

import { COLORS, SIZES } from "@/constants/theme";

const tradeTypes = ["Buy", "Sell"];

const Welcome = () => {
  const router = useRouter();
  const [activeType, setActiveType] = useState("Buy");

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.container}>
        <Text style={styles.slogan}>Empowering traders, one App at a time</Text>
      </View>

      {/* search component */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChangeText={() => {}}
            placeholder="Find your way..."
          />
          <Ionicons name="scan-circle" size={28} color={COLORS.primaryGreen} />
        </View>
      </View>
      <View style={styles.tradeTypeContainer}>
        {tradeTypes.map((type) => (
          <Pressable
            key={type}
            style={[
              styles.tradeTypeBtn,
              activeType === type && styles.tradeTypeBtnActive,
            ]}
            onPress={() => setActiveType(type)}
          >
            <Text
              style={[
                styles.tradeTypeBtnText,
                activeType === type && styles.tradeTypeBtnTextActive,
              ]}
            >
              {type}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Welcome;
