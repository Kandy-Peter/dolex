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
  },
  slogan: {
    fontFamily: FONT.black,
    color: COLORS.white,
    fontSize: 22,
    width: "60%",
    paddingTop: SIZES.large,
  },

  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "90%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
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
