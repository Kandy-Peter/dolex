import axios from "axios";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

import { ScreenStore } from "@/stores/screenStore";

export const useLocation = () => {
  const [country, setCountry] = useState<{
    country: string;
    countryCode: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSearchingCountry, setIsSearchingCountry] = useState(false);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Please grant location permission to use this app");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      return location;
    } catch (error: any) {
      setErrorMsg(error);
      setIsSearchingCountry(false);
      console.log(error);
    }
  };

  const getCountryCode = async (
    latitude: number,
    longitude: number,
  ): Promise<{ country: string; countryCode: string }> => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      const response = await axios.get(url);
      const locationDetails = await response.data;

      const country = locationDetails.address?.country;
      const countryCode = locationDetails.address?.country_code?.toUpperCase();

      return { country, countryCode };
    } catch (error: any) {
      console.log(error);
      setErrorMsg(error);
      setIsSearchingCountry(false);
      return { country: "", countryCode: "" };
    }
  };

  useEffect(() => {
    setIsSearchingCountry(true);
    (async () => {
      const location = await getLocation();
      if (location) {
        const { latitude, longitude } = location.coords;
        const country = await getCountryCode(latitude, longitude);
        setCountry(country);
        ScreenStore.update((s) => {
          s.country = country;
        });
        setIsSearchingCountry(false);
      }
    })();
    setIsSearchingCountry(false);
  }, []);

  return { country, errorMsg, isSearchingCountry };
};
