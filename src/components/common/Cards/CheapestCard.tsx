import { Entypo } from "@expo/vector-icons";
import { View, Text, Pressable, Image } from "react-native";

import styles from "./style";

import { COLORS } from "@/constants/theme";

interface ICards {
  backgroundColor: string;
  IconUrl: any;
  item: {
    name: string;
    sell_price: string;
    percentage_change: string;
  };
}

const CheapestJobCards = ({ item, backgroundColor, IconUrl }: ICards) => {
  return (
    <Pressable
      style={{ ...styles.container, backgroundColor }}
      onPress={() => {}}
    >
      <Image style={styles.cardImage} source={IconUrl} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>{item.sell_price}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.textSuccess}>{item.percentage_change}</Text>
          <Entypo name="arrow-bold-up" size={24} color="green" />
        </View>
      </View>
    </Pressable>
  );
};

export default CheapestJobCards;
