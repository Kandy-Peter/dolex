import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

const rateStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 140,
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
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  onlineStatus: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: COLORS.green,
    position: "absolute",
    bottom: 0,
    right: -4,
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLORS.white,
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
    width: 100,
    backgroundColor: COLORS.secondaryGreen,
    borderRadius: 3,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.darkWhite,
    marginTop: SIZES.medium,
    alignSelf: "center",
  },
});

export default rateStyle;
