import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: 270,
    height: 150,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    position: "relative",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  cardTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  cardSubtitle: {
    fontFamily: FONT.black,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  textSuccess: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.green,
  },
  cardImage: {
    width: 90,
    height: 90,
    position: "absolute",
    right: 20,
    top: "20%",
  },
});
