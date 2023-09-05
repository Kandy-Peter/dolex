import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
  },
  separator: {
    width: "10%",
    height: 5,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.small,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.light,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    paddingHorizontal: 2,
  },
});
