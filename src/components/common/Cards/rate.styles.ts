import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

const rateStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 270,
    padding: SIZES.medium,
    justifyContent: "space-between",
    borderBottomColor: COLORS.secondaryGray,
    borderBottomWidth: 2,
  },
  topContainer: {
    flexDirection: "row",
    gap: SIZES.medium,
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
  button: {},
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  cardTtile: {
    fontFamily: FONT.bold,
    color: COLORS.secondaryBlue,
    fontSize: SIZES.large,
  },
  cardSubtitle: {
    fontFamily: FONT.black,
    fontSize: SIZES.xLarge,
    color: COLORS.darkGray,
  },
  detailsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.small,
  },
  buttonContainer: {
    width: "100%",
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.secondaryGreen,
    height: 50,
    justifyContent: "center",
  },
  status: {
    fontFamily: FONT.bold,
    alignItems: "center",
    fontSize: SIZES.medium,
    backgroundColor: COLORS.greenOpacity,
    borderRadius: 20,
    borderColor: COLORS.secondaryGreen,
    borderWidth: 1,
    paddingHorizontal: SIZES.small,
    width: 70,
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default rateStyle;
