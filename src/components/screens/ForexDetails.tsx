import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import CheckBox from "../common/Fieds/checkBox";
import Dropdown from "../common/Fieds/dropdown/authSelectCountry";
import CountryCodeInput from "../common/Fieds/dropdown/countryCodePicker";
import MultiSelectDropdown from "../common/Fieds/dropdown/multiSelect";
import VerifyEmailModal from "../common/modal/formModal";
import TermsAndConditonLabel from "../common/outsideLinks/termsAndConditions";

import AuthBtn from "@/components/common/Buttons/authBtn";
import CancelBtn from "@/components/common/Buttons/cancelBtn";
import Input from "@/components/common/Fieds/Inputs/input";
import Loader from "@/components/common/Loader";
import { COLORS, FONT, SIZES } from "@/constants/theme";
import { useSession } from "@/contexts/auth";
import Validations from "@/helpers/inputValidation";
import { ScreenStore } from "@/stores/screenStore";
import { COUNTRIES } from "@/utils/countries";
import { CURRENCIES } from "@/utils/currencies";

const ForexDetails = () => {
  const { session, isLoading, signIn } = useSession() ?? {
    session: null,
    isLoading: false,
  };

  const information = ScreenStore.useState();

  const inputsData = {
    forex_bureau_name: "",
    country: "",
    phone_number: "",
    prefered_currencies: [] as { code: string }[],
    termsAccepted: false,
  };

  const [inputs, setInputs] = useState({
    ...inputsData,
    country: information.country.country,
  });
  const [errors, setErrors] = useState<any | null>(inputsData);
  const [country, setCountry] = useState<string>();
  const [isVerifyEmailModalVisible, setIsVerifyEmailModalVisible] =
    useState(false);

  const handleErrors = (name: string, value: string) => {
    setErrors((prev: any) => ({ ...prev, [name]: value }));
  };

  const validateInputs = async () => {
    try {
      await Validations.forexSChema.validate(inputs, { abortEarly: false });
      setErrors({
        forex_bureau_name: "",
        country: "",
        phone_number: "",
        prefered_currencies: "",
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
      s.forex_bureau_name = inputs.forex_bureau_name;
      s.phone_number = inputs.phone_number;
      s.country.country = inputs.country;
      s.prefered_currencies = inputs.prefered_currencies;
      s.termsAccepted = inputs.termsAccepted;
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

  const handleSelectCurrency = (selectedItems: { code: string }[]) => {
    setInputs((prev) => ({ ...prev, prefered_currencies: selectedItems }));
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
      {isVerifyEmailModalVisible ? (
        <VerifyEmailModal
          onEmailConfirmed={handleEmailConfirmed}
          email={information.email}
        />
      ) : (
        <View style={style.formContainer}>
          <Text style={style.subTitle}>Forex bureau details</Text>
          <View style={style.inputContainer}>
            <Input
              placeHolder="Bureau Name"
              error={errors.forex_bureau_name}
              value={inputs.forex_bureau_name}
              onChangeText={(text: string) =>
                handleOnChange("forex_bureau_name", text)
              }
              onFocus={() => handleErrors("forex_bureau_name", "")}
            />
            <Dropdown
              name="Country"
              data={COUNTRIES}
              error={errors.country}
              onFocus={() => handleErrors("country", "")}
              defaultValue={information.country.country}
              onSelect={(item: any) => {
                setCountry(item.name);
                handleOnChange("country", item.name);
              }}
            />
            <CountryCodeInput
              error={errors.phone_number}
              value={inputs.phone_number}
              onFocus={() => handleErrors("phone_number", "")}
              onChangeText={(text: string) => {
                setInputs((prev) => ({ ...prev, phone_number: text }));
              }}
              defaultCountryCode={information.country.countryCode}
            />
            <MultiSelectDropdown
              name="Prefered Currencies"
              data={CURRENCIES}
              error={errors.prefered_currencies}
              onFocus={() => handleErrors("prefered_currencies", "")}
              onSelect={(selectedCurrencies: any) =>
                handleSelectCurrency(selectedCurrencies)
              }
            />
            <CheckBox
              label={TermsAndConditonLabel()}
              value={inputs.termsAccepted}
              onChange={(value: boolean) => handleCheckBox(value)}
              error={errors.termsAccepted}
            />
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

export default ForexDetails;
