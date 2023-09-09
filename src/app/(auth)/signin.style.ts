import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
  },
  title: {
    fontSize: 30,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  subTitle: {
    fontSize: 22,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.large,
  },
  inputContainer: {
    width: "100%",
    marginBottom: SIZES.small,
  },
  forgotPasswordContainer: {},
  forgotPasswordText: {
    fontSize: 15,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: "100%",
    marginTop: SIZES.large,
  },
  singUplink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.large,
  },
});
