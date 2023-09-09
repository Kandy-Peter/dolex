import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

import styles from "./style";

import { COLORS } from "@/constants/theme";

interface IInput {
  placeHolder: string;
  error: string;
  value: string;
  password?: boolean;
  onFocus: (ev: Event) => void;
  onChangeText: (text: string) => void;
}

const Input = ({
  placeHolder,
  value,
  error,
  password,
  onFocus = () => {},
  ...props
}: IInput) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{}}>
      <View
        style={[
          styles.container,
          {
            borderColor: error
              ? "red"
              : isFocused
              ? COLORS.primary
              : COLORS.darkWhite,
          },
        ]}
      >
        <TextInput
          autoCorrect={false}
          style={{ flex: 1, color: COLORS.darkGray }}
          placeholder={placeHolder}
          placeholderTextColor={COLORS.gray}
          value={value}
          onFocus={(ev: any) => {
            setIsFocused(true);
            onFocus(ev);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          {...props}
        />
        {password && (
          <Entypo
            name={hidePassword ? "eye-with-line" : "eye"}
            size={24}
            color={COLORS.darkGray}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
    </View>
  );
};

export default Input;
