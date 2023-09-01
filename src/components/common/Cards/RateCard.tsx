import { Entypo, AntDesign } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

import rateStyle from "./rate.styles";

import { COLORS } from "@/constants/theme";

interface ICards {
  item: {
    id: string;
    name: string;
    likes: string;
    sell_price: string;
  };
}

const RateCard = ({ item }: ICards) => {
  return (
    <View style={rateStyle.container}>
      <View style={rateStyle.leftContainer}>
        <Text style={rateStyle.cardTtile}>{item.name}</Text>
        <Text>{item.likes} Orders</Text>
      </View>
      <View style={rateStyle.rightContainer}>
        <Text>${item.sell_price}</Text>
        <AntDesign name="caretup" size={24} color="green" />
        <Pressable style={rateStyle.button}>
          <Entypo name="plus" size={24} color={COLORS.white} />
        </Pressable>
      </View>
    </View>
  );
};

export default RateCard;
