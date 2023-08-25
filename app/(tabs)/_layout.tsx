import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, Text } from "react-native";

import styles from "../../src/assets/styles/tabs.style";

import ScreenHeaderBtn from "@/components/common/header/ScreenHeaderBtn";
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
        headerStyle: { backgroundColor: COLORS.white },
        headerShadowVisible: false,
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
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <MaterialCommunityIcons
                      name="bell"
                      size={24}
                      color={COLORS.darkGray}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <MaterialCommunityIcons
                      name="help-rhombus"
                      size={24}
                      color={COLORS.darkGray}
                      style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
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
