import { useState, createContext, useEffect } from "react";

import { useLocation } from "@/helpers/getLocation";
const CountryContext = createContext({} as any);

const CountryProvider = ({ children }: any) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>("RW");
  const [searching, setSearching] = useState<boolean>(true);
  const userLocation = useLocation();

  if (userLocation.country?.countryCode === null) {
    setSearching(true);
  }

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  useEffect(() => {
    if (userLocation?.country?.countryCode !== null) {
      const country = userLocation?.country?.countryCode;
      setSelectedCountry(country || null);
      setSearching(false);
    } else {
      setSearching(true);
    }
  }, [userLocation.country?.countryCode]);

  return (
    <CountryContext.Provider
      value={{
        selectedCountry,
        handleCountryChange,
        searching,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryProvider };
