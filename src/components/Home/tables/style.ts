import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SIZES.large,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: SIZES.xLarge,
    flex: 1,
  },
  tableHeader: {
    justifyContent: "space-between",
    paddingHorizontal: SIZES.large,
  },
  tableHeaderText: {
    fontFamily: FONT.bold,
    fontSize: 22,
    color: COLORS.darkGray,
  },
  separator: {
    width: "7%",
    height: 5,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.small,
  },
  tableHeaderLink: {
    fontFamily: FONT.regular,
    fontSize: 16,
    color: COLORS.primary,
  },
  tableBody: {
    marginTop: SIZES.large,
  },
  tableRow: {
    width: "100%",
  },
  paginationButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationText: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    fontFamily: FONT.bold,
    fontSize: 18,
  },
});
