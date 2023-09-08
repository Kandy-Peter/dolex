import { Link } from "expo-router";
import { useState } from "react";
import { Text, View, Keyboard, Alert } from "react-native";

import style from "./signin.style";

import AuthBtn from "@/components/common/Buttons/authBtn";
import Input from "@/components/common/Fieds/input";
import Loader from "@/components/common/Loader";
import { COLORS } from "@/constants/theme";
import { useSession } from "@/contexts/auth";

export default function SignIn() {
  const { session, isLoading, signIn } = useSession() ?? {};

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any | null>({});

  const handleErrors = (name: string, value: string) => {
    setErrors((prev: any) => ({ ...prev, [name]: value }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      isValid = false;
      handleErrors("email", "Email is required");
    }

    if (!inputs.password) {
      isValid = false;
      handleErrors("password", "Password is required");
    }

    return isValid;
  };

  const handleOnChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View
      style={style.container}
      //remove the 
    >
      <Loader isLoading={isLoading} />
      <View style={style.formContainer}>
        <Text style={style.title}>Welcome back!</Text>
        <Text style={style.subTitle}>Sign in to continue</Text>

        <View style={style.inputContainer}>
          <Input
            placeHolder="Your email"
            iconName="mail"
            error={errors.email}
            value={inputs.email}
            onChangeText={(text: string) => handleOnChange("email", text)}
            onFocus={() => handleErrors("email", "")}
          />
          <Input
            placeHolder="Your password"
            iconName="lock"
            error={errors.password}
            value={inputs.password}
            password
            onChangeText={(text: string) => handleOnChange("password", text)}
            onFocus={() => handleErrors("password", "")}
          />
          <View style={style.forgotPasswordContainer}>
            <Text style={style.forgotPasswordText}>Forgot password?</Text>
            {/* <Text style={style.textUnderline} /> */}
          </View>
          <View style={style.buttonContainer}>
            <AuthBtn title="Sign in" onPress={() => {}} />
          </View>
          <View style={style.singUplink}>
            <Text style={{}}>Forgot password?</Text>
            <Link replace style={style.forgotPasswordText} href="/sign-up">
              SingUp
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
