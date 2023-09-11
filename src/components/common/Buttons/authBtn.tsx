import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { COLORS, FONT } from "@/constants/theme";

interface IAuthBtn {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const AuthBtn = ({ title, onPress, disabled }: IAuthBtn) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: disabled ? COLORS.primaryOpaque : COLORS.primary,
        paddingVertical: 10,
        width: "100%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        height: 50,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "bold",
          fontSize: 18,
          fontFamily: FONT.bold,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthBtn;
