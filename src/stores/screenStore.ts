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
  prefered_currencies: [] as { code: string }[],
  country: { country: "", countryCode: "" },
  termsAccepted: false,
  progress: 0,
  location: null,
});

export const clearInformation = () => {
  ScreenStore.update((s) => {
    s.user_type = "";
    s.email = "";
    s.full_name = "";
    s.password = "";
    s.password_confirmation = "";
    s.phone_number = "";
    s.forex_bureau_name = "";
    s.forex_bureau_address = "";
    s.prefered_currencies = [];
    s.termsAccepted = false;
    s.progress = 0;
    s.location = null;
  })
};

registerInDevtools({
  ScreenStore,
});
