import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OTPTextView from "react-native-otp-textinput";

import AuthBtn from "../common/Buttons/authBtn";

import { COLORS, FONT, SIZES } from "@/constants/theme";
import { ScreenStore } from "@/stores/screenStore";

const VerifyForm = () => {
  const [otpInput, setOtpInput] = useState<string>("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const { email } = ScreenStore.useState();

  const input = useRef<OTPTextView>(null);

  // const clear = () => input.current?.clear();

  useEffect(() => {
    if (countdown === 0) {
      setResendDisabled(false);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, resendDisabled]);

  const handleResendCode = () => {
    setResendDisabled(true);
    setCountdown(30);
  };
  const handlePreviousScreen = () => {
    ScreenStore.update((s) => {
      s.progress -= 1;
    });
  };

  const handleTextChange = (text: string) => {
    setOtpInput(text);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: FONT.bold, fontSize: 24, marginVertical: 20 }}>
        OTP Verification
      </Text>
      <Text
        style={{
          fontFamily: FONT.regular,
          color: COLORS.darkGray,
          fontSize: 16,
        }}
      >
        Enter the code sent to <Text>{email ? email : "your email"}</Text>
      </Text>
      <OTPTextView
        ref={input}
        handleTextChange={handleTextChange}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.roundedTextInput}
        tintColor={COLORS.primary}
        offTintColor={COLORS.darkGray}
        autoFocus
        inputCount={5}
      />
      <Text style={{ fontFamily: FONT.regular, color: COLORS.darkGray }}>
        Resend code in 00:{countdown < 10 ? `0${countdown}` : countdown}
      </Text>

      <Text style={{ fontFamily: FONT.bold, color: COLORS.darkGray }}>
        Didn't receive the code?{" "}
        <Text
          style={{
            fontFamily: FONT.bold,
            color: !resendDisabled ? COLORS.primary : COLORS.gray,
            fontSize: 16,
          }}
          onPress={resendDisabled ? () => {} : handleResendCode}
        >
          {" "}
          Resend
        </Text>
      </Text>
      <AuthBtn onPress={() => {}} title="Verify email" />
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={handlePreviousScreen}
      >
        <Text style={styles.backBtn}>
          <Ionicons
            name="chevron-back"
            size={20}
            style={{ marginTop: 5 }}
            color={COLORS.primary}
          />
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginVertical: SIZES.xLarge,
    padding: 20,
  },
  textInputContainer: {
    margin: 20,
  },
  roundedTextInput: {
    width: 60,
    height: 60,
  },
  backBtn: {
    color: COLORS.primary,
    marginTop: 20,
    fontFamily: FONT.bold,
    fontSize: 18,
  },
};

export default VerifyForm;
