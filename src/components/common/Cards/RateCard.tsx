import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

import rateStyle from "./rate.styles";

import { COLORS, FONT } from "@/constants/theme";
import formatNumber from "@/utils/formatNumber";

interface ICards {
  item: {
    _id: string;
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
  const router = useRouter();
  return (
    <View style={rateStyle.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={rateStyle.topContainer}>
          <View style={rateStyle.avatarContainer}>
            <Image
              source={require("@/assets/images/avatars/money.png")}
              style={rateStyle.image}
            />
            <View style={rateStyle.onlineStatus} />
          </View>
          <View>
            <Text style={rateStyle.cardTtile}>
              {item.forexBureauDetails.name}
            </Text>
            <View
              style={{ alignItems: "center", gap: 4, flexDirection: "row" }}
            >
              <AntDesign name="star" size={20} color="gold" />
              <Text style={{ fontFamily: FONT.bold }}>
                {item.forexBureauDetails.rates}
              </Text>
            </View>
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
          />
          <Pressable
            style={rateStyle.buttonContainer}
            onPress={() => router.push(`/rate_details/${item._id}`)}
          >
            <Text
              style={{
                color: COLORS.lightWhite,
                fontFamily: FONT.bold,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Buy USD
            </Text>
          </Pressable>
        </View>
      </View>
      <Text style={rateStyle.bottomSeparator} />
    </View>
  );
};

export default RateCard;
