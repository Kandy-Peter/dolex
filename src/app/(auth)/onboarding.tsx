import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { COLORS, SIZES, FONT } from "@/constants/theme";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    image: require("@/assets/images/icons/welcome1.png"),
    title: "Welcome to mago",
    subtitle:
      "Discover a seamless way to exchange dollars for local currency. Mago connects you with trusted forex bureaus for fast and secure transactions",
  },
  {
    id: "2",
    image: require("@/assets/images/icons/exchange.png"),
    title: "Effortless Exchange",
    subtitle:
      "With Mago, you can buy or sell dollars at competitive rates with just a few taps. Say goodbye to long queues and complicated processes",
  },
  {
    id: "3",
    image: require("@/assets/images/icons/secure.png"),
    title: "Your Peace of Mind",
    subtitle:
      "Mago prioritizes your security. We verify all forex bureaus for your safety. Your transactions are encrypted, ensuring a worry-free experience",
  },
];

const Slide = ({ item }: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width,
        paddingTop: SIZES.large,
      }}
    >
      <Image
        source={item?.image}
        style={{ height: "35%", width: "80%", resizeMode: "contain" }}
      />
      <View style={{ marginTop: SIZES.large }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnBoardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);
  const route = useRouter();
  const updateCurrentSlideIndex = (e: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: COLORS.primary,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => route.push("/sign-in")}
            >
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontSize: 18,
                  color: COLORS.white,
                }}
              >
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }: any) => <Slide item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.darkGray,
    fontFamily: FONT.regular,
    fontSize: 16,
    marginTop: 20,
    maxWidth: "90%",
    textAlign: "center",
    lineHeight: 23,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
});

export default OnBoardingScreen;
