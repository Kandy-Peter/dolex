import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SIZES.xLarge,
    paddingHorizontal: SIZES.large,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.light,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});
