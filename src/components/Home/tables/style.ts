import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SIZES.large,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: SIZES.xLarge,
    flex: 1,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.large,
  },
  tableHeaderText: {
    fontFamily: FONT.bold,
    fontSize: 22,
    color: COLORS.darkGray,
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
    borderBottomColor: COLORS.gray,
  },
});
