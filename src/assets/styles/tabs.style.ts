import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 5,
    marginRight: 15,
  },

  headerTitle: {
    fontFamily: FONT.title,
    color: COLORS.lightWhite,
    fontSize: SIZES.xxLarge,
    marginLeft:  SIZES.large,
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
