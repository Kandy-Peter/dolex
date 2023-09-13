import { Link } from "expo-router";
import React from "react";
import { Text, StyleSheet } from "react-native";

import { COLORS, FONT } from "@/constants/theme";

const TermsAndConditonLabel = () => {
  return (
    <Text style={style.label}>
      I agree to the Mago Terms and Conditions.{" "}
      <Link href="https://google.com" style={style.link}>
        <Text style={style.link}>Learn more</Text>
      </Link>
    </Text>
  );
};
const style = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.darkGray,
  },
  link: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});

export default TermsAndConditonLabel;
