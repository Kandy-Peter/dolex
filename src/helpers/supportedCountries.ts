import { Alert, Linking } from "react-native";

import { ScreenStore } from "@/stores/screenStore";
import { COUNTRIES } from "@/utils/countries";

const supportedCountries = (country: {
  country: string;
  countryCode: string;
}) => {
  if (country.country === "") {
    // block user from proceeding if country is not selected and add a btn to got the phone parameter
    Alert.alert(
      "Location not set",
      "We need to know your location to proceed with the registration",
      [
        {
          text: "Cancel",
          onPress: () => {
            ScreenStore.update((s) => {
              s.progress = 0;
            });
          }
        },
        {
          text: "Set Location",
          onPress: () => {
            ScreenStore.update((s) => {
              s.progress = 0;
            });

            Linking.openSettings();
          },
        },
      ],
    );
    return false;
  }
  // block user if country is not supported by the app
  const supporedCOuntry = COUNTRIES.find(
    (c) => c.value === country.countryCode,
  );
  if (!supporedCOuntry) {
    Alert.alert(
      "Location not supported",
      "We are sorry, forex trading is not supported in your country yet",
      [
        {
          text: "Change Location",
          onPress: () => {
            ScreenStore.update((s) => {
              s.progress = 0;
            });
          },
        },
      ],
    );
    return false;
  }
  return true;
};

export default supportedCountries;
