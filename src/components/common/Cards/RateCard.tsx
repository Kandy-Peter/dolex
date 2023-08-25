import { View, Text, Pressable, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';

import styles from "./style";
import { COLORS } from "@/constants/theme";

interface ICards {
  backgroundColor: string;
  item: {
    name: string;
    sell_price: string;
    percentage_change: string;
  };
}

const RateCard = ({ item }: ICards) => {

}