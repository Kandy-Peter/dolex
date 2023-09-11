import { View, Text } from "react-native";
import React from "react";

import { ScreenStore } from "@/stores/screenStore";

const VerifyForm = () => {
  const information = ScreenStore.useState();
  return (
    <View>
      <Text> VerifyForm </Text>
    </View>
  );
};

export default VerifyForm;
