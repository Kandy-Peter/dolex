import * as Location from "expo-location";

const getCountryFromLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Please grant location permission to use this app");
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
  );
  const data = await response.json();
  const { countryCode } = data;

  return countryCode;
};

export default getCountryFromLocation;
