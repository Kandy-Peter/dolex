import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as yup from "yup";

import style from "./style";
import AuthBtn from "../Buttons/authBtn";
import Input from "../Fieds/Inputs/input";

import { ScreenStore } from "@/stores/screenStore";

interface Props {
  onEmailConfirmed: () => void;
  email: string;
}

const VerifyEmailModal = ({ email, onEmailConfirmed }: Props) => {
  const [errorMessage, setErrorMessage] = React.useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const schema = yup.object().shape({
      email: yup.string().email().required().matches(emailRegex),
    });
    schema
      .validate({ email: value })
      .then(() => {
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.errors[0]);
      });
  };

  const handleOnChange = (value: string) => {
    validateEmail(value);
    ScreenStore.update((s) => {
      s.email = value;
    });
  };
  const handleSubmit = () => {
    // if (isEmailValid) {
      onEmailConfirmed();
    // }
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

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
      <AuthBtn title="Confirm email" onPress={handleSubmit} />
    </View>
  );
};

export default VerifyEmailModal;
