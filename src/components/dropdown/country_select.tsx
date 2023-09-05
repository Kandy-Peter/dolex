import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { pickerSelectStyles } from "./style";

import { COLORS } from "@/constants/theme";
import { COUNTRIES } from "@/utils/countries";

interface CountrySelectProps {
  selectedCountry: string;
  handleCountryChange: (value: string) => void;
}

const CountrySelect = ({
  selectedCountry,
  handleCountryChange,
}: CountrySelectProps) => {
  const [open, setOpen] = useState(false);
  const [countries, setCountries] = useState(COUNTRIES);

  useEffect(() => {
    const selectedCountryInfo = COUNTRIES.find(
      (country) => country.value === selectedCountry,
    );
    if (selectedCountryInfo) {
      const updatedCountries = [...countries];

      const selectedIndex = updatedCountries.findIndex(
        (country) => country.value === selectedCountryInfo.value,
      );
      if (selectedIndex !== -1) {
        updatedCountries[selectedIndex].value = selectedCountryInfo.value;
        setCountries(updatedCountries);
      }
    }
  }, [selectedCountry]);

  return (
    <DropDownPicker
      open={open}
      value={selectedCountry}
      items={countries}
      setOpen={setOpen}
      setValue={(value: any) => {
        handleCountryChange(value);
        setOpen(false);
      }}
      containerStyle={{ width: "60%", height: 40 }}
      style={pickerSelectStyles.container}
      dropDownContainerStyle={pickerSelectStyles.dropdown}
      placeholder="Select a Country"
      customItemLabelStyle={{
        justifyContent: "flex-end",
      }}
      labelStyle={{
        color: COLORS.lightWhite,
        fontSize: 14,
        fontWeight: "bold",
      }}
      selectedItemLabelStyle={{ fontWeight: "bold" }}
      selectedItemContainerStyle={{ backgroundColor: "#e1e1e1" }}
      listItemLabelStyle={{ justifyContent: "flex-start" }}
      showArrowIcon={false}
      showTickIcon={false}
    />
  );
};

export default CountrySelect;
