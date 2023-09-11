import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: FONT.regular,
    color: COLORS.darkGray,
  },
});
