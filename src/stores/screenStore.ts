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
  termsAccepted: "",
  privacyAccepted: "",
  progress: 0,
});

registerInDevtools({
  ScreenStore,
});
