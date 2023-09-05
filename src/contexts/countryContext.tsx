import * as Location from "expo-location";
import { useState, createContext, useEffect } from "react";
const CountryContext = createContext({
  selectedCountry: "",
  handleCountryChange: (value: string) => {},
});

const CountryProvider = ({ children }: any) => {
  const [selectedCountry, setSelectedCountry] = useState("RWA");

  const getCountryFromLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const location = await Location.getCurrentPositionAsync({});

      // Fetch country code based on the newly acquired location
      const { latitude, longitude } = location.coords;
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      );
      const data = await response.json();
      const country = data.countryCode;
      setSelectedCountry(country);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  useEffect(() => {
    getCountryFromLocation();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        selectedCountry,
        handleCountryChange,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryProvider };
