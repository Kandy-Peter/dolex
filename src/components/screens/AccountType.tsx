import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import { ScreenStore } from "@/stores/screenStore";

const AccountType = () => {
  const selectAccountType = (type: string) => {
    ScreenStore.update((s) => {
      s.user_type = type;
      s.progress += 1;
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Choose Your Account Type</Text>
      <Button
        title="Personal"
        onPress={() => selectAccountType("normal_user")}
      />
      <Button
        title="Forex Bureau"
        onPress={() => selectAccountType("forex_bureau")}
      />
    </View>
  );
};

export default AccountType;
