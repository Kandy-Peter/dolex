import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: "48%",
    height: 150,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  cardTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cardSubtitle: {
    fontFamily: FONT.black,
    fontSize: SIZES.xLarge,
    color: COLORS.darkGray,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textSuccess: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.green,
  }
});
