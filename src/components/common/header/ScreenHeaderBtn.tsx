import React from "react";
import { Pressable, Image } from "react-native";

import styles from "./screenStyles.style";

interface IScreenBtn {
  iconUrl: any;
  dimension: any;
  handlePress: () => void;
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: IScreenBtn) => {
  return (
    <Pressable onPress={handlePress}>
      {({ pressed }) => (
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={{
            ...styles.btnIcon, // Apply the common icon styles
            width: dimension,
            height: dimension,
            marginLeft: 15,
          }}
        />
      )}
    </Pressable>
  );
};

export default ScreenHeaderBtn;
