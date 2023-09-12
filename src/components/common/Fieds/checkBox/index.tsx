import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/theme";

interface ICheckBox {
  label: React.ReactNode;
  value: boolean;
  onChange: (value: boolean) => void;
  error?: string;
}

const CheckBox = ({ label, value, onChange, error }: ICheckBox) => {
  return (
    <>
      <View style={style.container}>
        <Checkbox
          style={style.checkbox}
          value={value}
          onValueChange={(value) => onChange(value)}
        />
        <Text style={style.label}>{label}</Text>
      </View>
      <Text style={{ color: "red", fontSize: 10 }}>{error}</Text>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    color: COLORS.darkGray,
    fontSize: 16,
  },
});

export default CheckBox;
