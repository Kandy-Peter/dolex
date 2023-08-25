import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
  },

  slogan: {
    fontFamily: FONT.black,
    color: COLORS.darkGray,
    fontSize: 26,
    width: "90%",
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
    // // boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
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
  }
});