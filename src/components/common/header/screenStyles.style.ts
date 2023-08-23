import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants/theme";

export default StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    margin: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  btnIcon: {
    borderRadius: SIZES.small / 1.25,
  },
});
