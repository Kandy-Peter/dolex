import { Entypo, AntDesign } from "@expo/vector-icons";
import { View, Text, Pressable, Image } from "react-native";
import formatNumber from "@/utils/formatNumber";

import rateStyle from "./rate.styles";

import { COLORS, FONT } from "@/constants/theme";

interface ICards {
  item: {
    id: string;
    buy_rate: string;
    sell_rate: string;
    available_amount: number;
    limit_from: number;
    limit_to: number;
    currency: string;
    forexBureauDetails: {
      avatar: string;
      name: string;
      completedOrders: string;
      rates: string;
      allowedPaymentMethods: string[];
    };
  };
}

const RateCard = ({ item }: ICards) => {
  return (
    <View style={rateStyle.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={rateStyle.topContainer}>
          <Image
            source={{ uri: item.forexBureauDetails.avatar }}
            style={rateStyle.image}
          />
          <Text style={rateStyle.cardTtile}>
            {item.forexBureauDetails.name}
          </Text>
          <View style={{ alignItems: "center", gap: 4, flexDirection: "row" }}>
            <AntDesign name="star" size={20} color="gold" />
            <Text style={{ fontFamily: FONT.bold }}>
              {item.forexBureauDetails.rates}
            </Text>
          </View>
        </View>
        <View style={rateStyle.status}>
          <Text style={{ color: COLORS.green }}>open</Text>
        </View>
      </View>
      <View style={rateStyle.priceContainer}>
        <Text
          style={{
            fontFamily: FONT.bold,
            fontSize: 22,
            color: COLORS.darkGray,
          }}
        >
          {formatNumber(item.sell_rate)}
        </Text>
        <Text>{item.currency}</Text>
      </View>
      <View style={rateStyle.detailsContainer}>
        <View style={rateStyle.details}>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: 14,
              color: COLORS.gray,
            }}
          >
            Availabe
          </Text>
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: 16,
              color: COLORS.darkGray,
            }}
          >
            {formatNumber(item.available_amount)}
          </Text>
        </View>
        <View style={rateStyle.details}>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: 14,
              color: COLORS.gray,
            }}
          >
            Limit
          </Text>
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: 16,
              color: COLORS.darkGray,
            }}
          >
            {formatNumber(item.limit_from)} - {formatNumber(item.limit_to)}
          </Text>
        </View>
        <View style={rateStyle.details}>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: 14,
              color: COLORS.gray,
            }}
          >
            Completed
          </Text>
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: 16,
              color: COLORS.darkGray,
            }}
          >
            {item.forexBureauDetails.completedOrders}
          </Text>
        </View>
      </View>
      <Pressable style={rateStyle.buttonContainer}>
        <Text
          style={{
            color: COLORS.lightWhite,
            fontFamily: FONT.bold,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Buy USD
        </Text>
      </Pressable>
    </View>
  );
};

export default RateCard;
