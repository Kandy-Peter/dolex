import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import style from "./style";
import AuthBtn from "../Buttons/authBtn";
import Input from "../Fieds/Inputs/input";

import { COLORS, FONT, SIZES } from "@/constants/theme";
import schemaValidations from "@/helpers/inputValidation";
import { ScreenStore } from "@/stores/screenStore";

const VerifyEmailModal = () => {
  const { email } = ScreenStore.useState();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);

  const validateInputs = async () => {
    try {
      await schemaValidations.validate({ email }, { abortEarly: false });
      setErrorMessage("");
      setIsEmailValid(true);
      return true;
    } catch (validationErrors: any) {
      const newErrors = {} as any;
      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrorMessage(newErrors.email);
      setIsEmailValid(false);
      return false;
    }
  };

  let newEmail = email;

  const handleOnChange = (value: string) => {
    ScreenStore.update((s) => {
      s.email = value;
    });
    newEmail = value;
    validateInputs();
  };

  React.useEffect(() => {
    validateInputs();
  }, []);

  const handleSubmit = () => {
    if (isEmailValid) {
      ScreenStore.update((s) => {
        s.email = newEmail;
        s.progress += 1;
      });
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}> Confirm your email </Text>
      <Text style={style.description}>
        {" "}
        We will send you a verification code to this email, confirm or edit the
        email to continue
      </Text>
      <Input
        placeHolder="Email"
        value={email}
        onChangeText={(text: string) => handleOnChange(text)}
        error={errorMessage}
        onFocus={() => setErrorMessage("")}
      />
      <AuthBtn title="Confirm email" onPress={() => handleSubmit()} />
    </View>
  );
};

export default VerifyEmailModal;
