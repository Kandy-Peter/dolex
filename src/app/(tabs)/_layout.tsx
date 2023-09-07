import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

import styles from "@/assets/styles/tabs.style";

import CountrySelect from "@/components/common/Fieds/dropdown/country_select";
import { COLORS } from "@/constants/theme";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color?: string;
  className?: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.primaryGray,
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-analytics"
              size={30}
              color={color}
            />
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <CountrySelect />
            </View>
          ),
          headerLeft: () => (
            <View>
              <Text style={styles.headerTitle}>mago</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="trade"
        options={{
          title: "Trade",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="exchange-alt" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
