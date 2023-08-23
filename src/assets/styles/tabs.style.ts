import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  tradeIcon: {
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primaryBlue,
    position: "absolute",
    top: -10,
  },
});
