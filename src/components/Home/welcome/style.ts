import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  welcomeContainer: {
    paddingHorizontal: SIZES.large,
    paddingBottom: 60,
    paddingTop: 25,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  container: {
    width: "100%",
    height: 160,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.large,
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: SIZES.large,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  subtitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginBottom: SIZES.large,
  },
  slogan: {
    padding: SIZES.medium,
    width: "70%",
  },
  tradeTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.xxLarge,
  },
  tradeTypeBtn: {
    width: "48%",
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  tradeTypeBtnActive: {
    backgroundColor: COLORS.white,
    color: COLORS.primary,
  },
  tradeTypeBtnText: {
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
  tradeTypeBtnTextActive: {
    color: COLORS.primary,
  },
});
