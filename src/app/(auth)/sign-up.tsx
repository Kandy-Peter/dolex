import RenderStepIndicator from "components/common/setpIndicator";
import AccountType from "components/screens/AccountType";
import ForexDetails from "components/screens/ForexDetails";
import VerifyForm from "components/screens/VerifyForm";
import PersonalAccount from "components/screens/personalAccount";
import React from "react";
import { Text, View } from "react-native";

import { ScreenStore } from "@/stores/screenStore";

const SignIn = () => {
  const information = ScreenStore.useState();

  const renderStepComponents = () => {
    if (information.progress === 0) {
      return <AccountType />;
    } else if (information.progress === 1) {
      return <PersonalAccount />;
    } else if (information.user_type === "normal_user") {
      if (information.progress === 2) {
        return <VerifyForm />;
      }
    } else if (information.user_type === "forex_bureau") {
      if (information.progress === 2) {
        return <ForexDetails />;
      } else if (information.progress === 3) {
        return <VerifyForm />;
      }
    }

    return <Text>Invalid Step</Text>;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      {information.progress > 0 &&
        RenderStepIndicator({
          progress: information.progress,
          user_type: information.user_type,
        })}
      {renderStepComponents()}
      {/* <Button title="Previous" onPress={handlePrevious} />
      <Button
        title={lastStep() ? "Finish" : "Next"}
        onPress={lastStep() ? () => {} : handleNext}
      /> */}
    </View>
  );
};

export default SignIn;
