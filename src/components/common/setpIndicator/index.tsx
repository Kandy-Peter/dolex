import React from "react";
import { View, Text } from "react-native";

import style from "./style";

import { COLORS, FONT } from "@/constants/theme";

interface IProps {
  progress: number;
  user_type: string;
}

const RenderStepIndicator = (information: IProps) => {
  const totalSteps = information.user_type === "normal_user" ? 3 : 4;
  return (
    <View style={style.container}>
      {[...Array(totalSteps)].map((_, index) => (
        <View style={style.stepContainer}>
          <View
            key={index}
            style={{
              ...style.step,
              display: index === 0 ? "none" : "flex",
              borderColor:
                information.progress >= index ? COLORS.primary : "grey",
            }}
          >
            <Text
              style={{
                color: information.progress >= index ? COLORS.primary : "grey",
                textAlign: "center",
                fontSize: 16,
                fontFamily: FONT.bold,
              }}
            >
              {index}
            </Text>
          </View>
          <View
            style={{
              ...style.separator,
              backgroundColor:
                information.progress > index ? COLORS.primary : "grey",
              display:
                index === 0 || index === totalSteps - 1 ? "none" : "flex",
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default RenderStepIndicator;
