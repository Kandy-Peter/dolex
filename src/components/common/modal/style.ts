import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    position: "absolute",
    width: "96%",
    height: "50%",
    borderRadius: 10,
    backgroundColor: "white",
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
    marginTop: SIZES.xxLarge,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
    shadowColor: COLORS.gray,
  },
  title: {
    fontSize: 20,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
    marginBottom: SIZES.small,
  },
  description: {
    fontSize: 16,
    fontFamily: FONT.regular,
    color: COLORS.darkGray,
    textAlign: "center",
    marginBottom: SIZES.small,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    height: 50,
  },
});
