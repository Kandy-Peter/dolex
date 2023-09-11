import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

const schemaValidations = yup.object().shape({
  full_name: yup.string().min(3).required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number",
    )
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
  termsAccepted: yup.boolean().oneOf([true], "Accept terms is required"),
});

export default schemaValidations;