import { useContext } from "react";

import { COUNTRIES } from "./countries";

import { CountryContext } from "@/contexts/countryContext";

const HandleCountryName = () => {
  const { selectedCountry } = useContext(CountryContext);

  let countryName = "";

  const country = COUNTRIES.find((country) => country.value === selectedCountry);

  country && (countryName = country.name);

  return countryName;
};

export default HandleCountryName;
