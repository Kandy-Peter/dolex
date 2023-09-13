import React from "react";
import { Image } from "react-native";

export const COUNTRIES = [
  {
    label: "UGN",
    value: "UG",
    name: "uganda",
    icon: () => (
      <Image
        source={{ uri: "https://www.countryflagicons.com/FLAT/64/UG.png" }}
        style={{ width: 20, height: 20 }}
      />
    ),
  },
  {
    label: "KEN",
    value: "KE",
    name: "kenya",
    icon: () => (
      <Image
        source={{ uri: "https://www.countryflagicons.com/FLAT/64/KE.png" }}
        style={{ width: 20, height: 20 }}
      />
    ),
  },
  {
    label: "RWA",
    value: "RW",
    name: "rwanda",
    icon: () => (
      <Image
        source={{ uri: "https://www.countryflagicons.com/FLAT/64/RW.png" }}
        style={{ width: 20, height: 20 }}
      />
    ),
  },
  {
    label: "DRC",
    value: "DRC",
    name: "congo(kinshasa)",
    icon: () => (
      <Image
        source={{ uri: "https://www.countryflagicons.com/FLAT/64/CD.png" }}
        style={{ width: 20, height: 20 }}
      />
    ),
  },
];
