import { useState } from "react";
import {
  messages,
  fieldNames,
  regex,
  isNameValid,
  isTypeAlphaSpace,
  isEmailValid,
  isPhoneValid,
  isTypeNumPlusBracket
} from "../../Utils/Constants/ContactUsForm.js";

  const initialFValues = {
    fullName: "",
    email: "",
    mobile: "",
    companyName: "",
    message: "",
  };

export function useForm(validateOnChange = false) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if (fieldNames.fullName in fieldValues){
      temp.fullName = fieldValues.fullName.trim()==="" ? messages.isRequired : isNameValid(fieldValues.fullName) ? "" : messages.notValid;
    }
    if (fieldNames.email in fieldValues){
      temp.email =
        fieldValues.email.trim() === ""
          ? messages.isRequired
          : isEmailValid(fieldValues.email)
          ? ""
          : messages.notValid;
    }

    if (fieldNames.mobile in fieldValues)
      temp.mobile = fieldValues.mobile.length===0 ? messages.isRequired : isPhoneValid(fieldValues.mobile) ? "" : messages.notValid;

    if (fieldNames.companyName in fieldValues)
      temp.companyName =
        fieldValues.companyName.length !== 0 ? "" : messages.isRequired;

    if (fieldNames.message in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? "" : messages.isRequired;

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name===fieldNames.fullName && !isTypeAlphaSpace(value)){
      return
    }
    if (name===fieldNames.mobile && !isTypeNumPlusBracket(value)){
      return
    }
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
      resetForm();
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    validate,
    handleSubmit
  };
}
