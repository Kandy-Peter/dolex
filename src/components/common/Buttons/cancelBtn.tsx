import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { COLORS, FONT } from "@/constants/theme";

import { ScreenStore } from "@/stores/screenStore";

const CancelBtn = () => {
  const handlePreviousScreen = () => {
    ScreenStore.update((s) => {
      s.progress -= 1;
    });
  };

  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center" }}
      onPress={handlePreviousScreen}
    >
      <Text style={styles.backBtn}>
        <Ionicons
          name="chevron-back"
          size={20}
          style={{ marginTop: 5 }}
          color={COLORS.primary}
        />
        Cancel
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    color: COLORS.primary,
    marginTop: 20,
    fontFamily: FONT.bold,
    fontSize: 18,
  },
});

export default CancelBtn;
