import { registerInDevtools, Store } from "pullstate";

export const ScreenStore = new Store({
  user_type: "",
  email: "",
  full_name: "",
  password: "",
  password_confirmation: "",
  phone_number: "",
  forex_bureau_name: "",
  forex_bureau_address: "",
  country: "",
  termsAccepted: false,
  progress: 0,
});

export const clearInformation = () => {
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
    termsAccepted: false,
    progress: 0,
  });
};

registerInDevtools({
  ScreenStore,
});
