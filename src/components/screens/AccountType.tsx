import { View, Text, Button } from "react-native";

import { ScreenStore } from "@/stores/screenStore";

const AccountType = () => {
  const information = ScreenStore.useState();

  const selectAccountType = (type: string) => {
    ScreenStore.update((s) => {
      s.user_type = type;
      s.progress += 1;
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Choose Your Account Type</Text>
      <Button title="Personal" onPress={() => selectAccountType("personal")} />
      <Button
        title="Forex Bureau"
        onPress={() => selectAccountType("forex_bureau")}
      />
    </View>
  );
};

export default AccountType;
