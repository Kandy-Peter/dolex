import { useState } from "react";
import { Button, Text, View } from "react-native";
import * as Progress from "react-native-progress";

import AccountType from "@/components/screens/AccountType";
import Credentials from "@/components/screens/Credentials";
import ForexDetails from "@/components/screens/ForexDetails";
import VerifyForm from "@/components/screens/VerifyForm";
import { COLORS } from "@/constants/theme";
import { ScreenStore } from "@/stores/screenStore";

const SignIn = () => {
  const information = ScreenStore.useState();

  const [visible, setVisible] = useState(false);

  // show dialogue on confirmation
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const clearAndReset = () => {
    ScreenStore.replace({
      user_type: "",
      email: "",
      full_name: "",
      password: "",
      password_confirmation: "",
      phone_number: "",
      forex_bureau_name: "",
      forex_bureau_address: "",
      country: "",
      termsAccepted: "",
      privacyAccepted: "",
      progress: 0,
    });
    setVisible(false);
  };

  const handleNext = () => {
    // TODO Add validation logic here if needed
    if (information.progress < 3) {
      ScreenStore.update((s) => {
        s.progress += 1;
      });
    }
  };

  const handlePrevious = () => {
    if (information.progress > 0) {
      ScreenStore.update((s) => {
        s.progress -= 1;
      });
    }
  };

  let currentStep = null;
  switch (information.progress) {
    case 0:
      currentStep = <AccountType />;
      break;
    case 1:
      currentStep = <Credentials />;
      break;
    case 2:
      currentStep = <ForexDetails />;
      break;
    case 3:
      currentStep = <VerifyForm />;
      break;
    default:
      currentStep = <Text>Invalid Step</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Sign In </Text>
      {currentStep}
      <Progress.Bar
        progress={information.progress / 3} // Assuming 3 steps
        width={200}
        height={20}
        color={COLORS.primary}
      />
      <Button title="Previous" onPress={handlePrevious} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default SignIn;
