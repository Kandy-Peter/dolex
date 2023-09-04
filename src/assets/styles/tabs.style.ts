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
    justifyContent: "space-around",
    paddingHorizontal: SIZES.medium,
    paddingVertical: 3,
    marginRight: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
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
