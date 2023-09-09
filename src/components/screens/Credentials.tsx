import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { ScreenStore } from "@/stores/screenStore";

const Credentials = () => {
  const information = ScreenStore.useState();

  const saveCredentials = () => {
    // TODO Implement validation here if needed
    // TODO Update the state with email and password
    ScreenStore.update((s) => {
      s.email = information.email;
      s.password = information.password;
      s.password_confirmation = information.password_confirmation;
      s.progress += 1;
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Enter Your Credentials</Text>
      <TextInput
        placeholder="Email"
        value={information.email}
        onChangeText={(email) => ScreenStore.update((s) => (s.email = email))}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={information.password}
        onChangeText={(password) =>
          ScreenStore.update((s) => (s.password = password))
        }
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={information.password_confirmation}
        onChangeText={(password_confirmation) =>
          ScreenStore.update(
            (s) => (s.password_confirmation = password_confirmation),
          )
        }
      />
      <Button title="Next" onPress={saveCredentials} />
    </View>
  );
};

export default Credentials;
