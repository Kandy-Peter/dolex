import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

const rateStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    padding: SIZES.small,
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    gap: SIZES.small,
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 5,
  },
  button: {},
  image: {
    width: 40,
    height: 40,
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
    width: "50%",
    backgroundColor: COLORS.secondaryGreen,
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    fontFamily: FONT.bold,
    alignItems: "center",
    fontSize: SIZES.medium,
    backgroundColor: "#31b7004d",
    borderRadius: 20,
    borderColor: COLORS.secondaryGreen,
    borderWidth: 1,
    paddingHorizontal: SIZES.small,
    width: 70,
    textAlign: "center",
    paddingVertical: 5,
  },
  bottomSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.gray,
    marginTop: SIZES.medium,
  },
});

export default rateStyle;
