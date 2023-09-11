import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
  },
  step: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  stepContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  separator: {
    width: 70,
    height: 3,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
