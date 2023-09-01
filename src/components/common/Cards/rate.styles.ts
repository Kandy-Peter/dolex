import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

const rateStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    padding: SIZES.medium,
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: "30%"
  },
  rightContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    // width: "70%"
  },
  button: {

  },
  cardTtile: {
    fontFamily: FONT.bold,
  },
  cardSubtitle: {
    fontFamily: FONT.black,
    fontSize: SIZES.xLarge,
    color: COLORS.darkGray,
  }

});

export default rateStyle;