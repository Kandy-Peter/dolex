import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

import { Country, CountryCode } from "@/@types/countryCode";
import { COLORS, FONT } from "@/constants/theme";

interface IInput {
  error: string;
  value: string;
  onFocus?: (ev: any) => void;
  onChangeText: (text: string) => void;
  defaultCountryCode?: string;
}

const CountryCodeInput = ({
  value,
  error,
  onChangeText,
  defaultCountryCode = "RW",
  onFocus = () => {},
  ...props
}: IInput) => {
  const initialCountryCode = defaultCountryCode.toUpperCase() as CountryCode;

  const [countryCode, setCountryCode] =
    useState<CountryCode>(initialCountryCode);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = (ev: any) => {
    setIsFocused(true);
    onFocus(ev);
  };

  return (
    <>
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
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCode
          withCallingCodeButton
          withEmoji
          onSelect={(country) => {
            setCountryCode(country.cca2);
          }}
        />
        <Text style={styles.verticalSeparation} />
        <TextInput
          autoCorrect={false}
          style={{ flex: 1, color: COLORS.darkGray, paddingLeft: 10 }}
          placeholder="Phone number"
          placeholderTextColor={COLORS.gray}
          inputMode="tel"
          value={value}
          onFocus={handleFocus}
          onBlur={() => setIsFocused(false)}
          onChangeText={(text) => onChangeText(text)}
          {...props}
        />
      </View>
      <Text style={{ color: "red", fontSize: 12 }}>{error}</Text>
    </>
  );
};

const styles = StyleSheet.create({
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
  verticalSeparation: {
    width: 1,
    height: "70%",
    backgroundColor: COLORS.darkWhite,
    marginHorizontal: 10,
  },
});

export default CountryCodeInput;
