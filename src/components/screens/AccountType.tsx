import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { COLORS, FONT, SIZES } from "@/constants/theme";
import supportedCountries from "@/helpers/supportedCountries";
import { ScreenStore } from "@/stores/screenStore";

const AccountType = () => {
  const { country } = ScreenStore.useState();
  const selectAccountType = (type: string) => {
    ScreenStore.update((s) => {
      s.user_type = type;
      s.progress += 1;
    });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Choose Your Account Type</Text>
      <View style={style.cards}>
        <TouchableOpacity
          style={style.button}
          onPress={() => selectAccountType("normal_user")}
        >
          <View style={style.icon}>
            <Image
              source={require("@/assets/images/icons/avatar.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View>
            <Text style={style.type}>Personal Account</Text>
            <Text style={style.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() =>
            supportedCountries(country) && selectAccountType("forex_bureau")
          }
        >
          <View style={style.icon}>
            <Image
              source={require("@/assets/images/icons/candlestick-chart.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View>
            <Text style={style.type}>Forex Bureau</Text>
            <Text style={style.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,
    width: "100%",
  },
  title: {
    fontSize: 22,
    marginBottom: 24,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
  },
  cards: {
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  button: {
    width: "90%",
    padding: 24,
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    shadowColor: COLORS.primaryOpaque,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.primaryOpaque,
    justifyContent: "center",
    alignItems: "center",
  },
  type: {
    fontSize: 18,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
  },
  description: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.darkGray,
  },
});
export default AccountType;
