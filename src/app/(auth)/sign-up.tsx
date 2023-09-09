import { Button, Text, View } from "react-native";
import * as Progress from "react-native-progress";

import AccountType from "@/components/screens/AccountType";
import Credentials from "@/components/screens/Credentials";
import ForexDetails from "@/components/screens/ForexDetails";
import VerifyForm from "@/components/screens/VerifyForm";
import PersonalAccount from "@/components/screens/personalAccount";
import { COLORS } from "@/constants/theme";
import { ScreenStore } from "@/stores/screenStore";

const SignIn = () => {
  const information = ScreenStore.useState();

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

  const renderStepComponents = () => {
    if (information.progress === 0) {
      return <AccountType />;
    } else if (information.user_type === "normal_user") {
      if (information.progress === 1) {
        return <PersonalAccount />;
      } else if (information.progress === 2) {
        return <VerifyForm />;
      }
    } else if (information.user_type === "forex_bureau") {
      if (information.progress === 1) {
        return <Credentials />;
      } else if (information.progress === 2) {
        return <ForexDetails />;
      } else if (information.progress === 3) {
        return <VerifyForm />;
      }
    }

    return <Text>Invalid Step</Text>;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Sign In </Text>
      {renderStepComponents()}
      <Progress.Bar
        progress={information.progress / 3}
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
