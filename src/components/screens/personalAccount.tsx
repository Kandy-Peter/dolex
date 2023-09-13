import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import CheckBox from "../common/Fieds/checkBox";
import VerifyEmailModal from "../common/modal/formModal";
import TermsAndConditonLabel from "../common/outsideLinks/termsAndConditions";

import AuthBtn from "@/components/common/Buttons/authBtn";
import Input from "@/components/common/Fieds/Inputs/input";
import Loader from "@/components/common/Loader";
import { COLORS, FONT, SIZES } from "@/constants/theme";
import { useSession } from "@/contexts/auth";
import Validations from "@/helpers/inputValidation";
import { ScreenStore } from "@/stores/screenStore";

const PersonalAccount = () => {
  const { session, isLoading, signIn } = useSession() ?? {
    session: null,
    isLoading: false,
  };

  const information = ScreenStore.useState();
  const isANormalAccount = information.user_type === "normal_user";

  const inputsData = {
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    termsAccepted: false,
  };

  const [inputs, setInputs] = useState(inputsData);
  const [errors, setErrors] = useState<any | null>(inputsData);
  const [isVerifyEmailModalVisible, setIsVerifyEmailModalVisible] =
    useState(false);

  const handleErrors = (name: string, value: string) => {
    setErrors((prev: any) => ({ ...prev, [name]: value }));
  };

  const validateInputs = async () => {
    const termsRequired = !!isANormalAccount;
    try {
      await Validations.authSchema(termsRequired).validate(inputs, {
        abortEarly: false,
      });
      setErrors({
        full_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        termsAccepted: "",
      });
      return true;
    } catch (validationErrors: any) {
      const newErrors = {} as any;
      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const saveCredentials = () => {
    ScreenStore.update((s) => {
      s.full_name = inputs.full_name;
      s.email = inputs.email;
      s.password = inputs.password;
      s.password_confirmation = inputs.password_confirmation;
      s.termsAccepted = inputs.termsAccepted;
      !isANormalAccount && (s.progress += 1);
    });
  };

  const handleEmailConfirmed = () => {
    ScreenStore.update((s) => {
      s.progress += 1;
    });
  };

  const handleOnChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckBox = (value: boolean) => {
    setInputs((prev) => ({ ...prev, termsAccepted: value }));
  };

  const handleSubmit = async () => {
    const isValid = await validateInputs();
    if (isValid) {
      saveCredentials();
      setIsVerifyEmailModalVisible(true);
    }
  };

  return (
    <View style={style.container}>
      <Loader isLoading={isLoading} />
      {isANormalAccount && isVerifyEmailModalVisible ? (
        <VerifyEmailModal
          onEmailConfirmed={handleEmailConfirmed}
          email={information.email}
        />
      ) : (
        <View style={style.formContainer}>
          <Text style={style.subTitle}>Enter your credentials</Text>
          <View style={style.inputContainer}>
            <Input
              placeHolder="Full name"
              error={errors.full_name}
              value={inputs.full_name}
              onChangeText={(text: string) => handleOnChange("full_name", text)}
              onFocus={() => handleErrors("full_name", "")}
            />
            <Input
              placeHolder="Email"
              error={errors.email}
              value={inputs.email}
              onChangeText={(text: string) => handleOnChange("email", text)}
              onFocus={() => handleErrors("email", "")}
            />
            <Input
              placeHolder="Password"
              error={errors.password}
              value={inputs.password}
              password
              onChangeText={(text: string) => handleOnChange("password", text)}
              onFocus={() => handleErrors("password", "")}
            />
            <Input
              placeHolder="Confrim password"
              error={errors.password_confirmation}
              value={inputs.password_confirmation}
              password
              onChangeText={(text: string) =>
                handleOnChange("password_confirmation", text)
              }
              onFocus={() => handleErrors("password_confirmation", "")}
            />
            {isANormalAccount && (
              <CheckBox
                label={TermsAndConditonLabel()}
                value={inputs.termsAccepted}
                onChange={(value: boolean) => handleCheckBox(value)}
                error={errors.termsAccepted}
              />
            )}
            <View style={style.buttonContainer}>
              <AuthBtn
                title="Create Account"
                onPress={handleSubmit}
                // disabled={isDisabled}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: SIZES.xLarge,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
    marginBottom: SIZES.small,
  },
  subTitle: {
    fontSize: 22,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
    marginBottom: SIZES.large,
  },
  inputContainer: {
    width: "100%",
    marginBottom: SIZES.medium,
  },
  forgotPasswordContainer: {},
  forgotPasswordText: {
    fontSize: 15,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: "100%",
    marginTop: SIZES.large,
  },
  singUplink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.large,
  },
  label: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.darkGray,
  },
  link: {
    fontSize: 14,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});

export default PersonalAccount;
