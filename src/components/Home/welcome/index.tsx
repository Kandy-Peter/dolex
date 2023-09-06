import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import styles from "./style";

import { COLORS } from "@/constants/theme";

const tradeTypes = ["Buy", "Sell"];

const Welcome = () => {
  const [activeType, setActiveType] = useState("Buy");

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/backgrounds/Frame.png")}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
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
