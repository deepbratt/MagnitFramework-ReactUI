import { useState } from "react";
import api from "../../Utils/Constants/api.js";
import {
  messages,
  fieldNames,
  isNameValid,
  isTypeAlphaSpace,
  isEmailValid,
  isPhoneValid,
  isTypeNumPlusBracket,
} from "../../Utils/Constants/ContactUsForm.js";
import { useCancelToken } from "../../Utils/CustomHooks/useCancelToken.js";

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
  const [isLoading, setIsLoading] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const [requestMessage, setRequestMessage] = useState('')
  const { createNewToken, isCancel } = useCancelToken();
  const [toastType, setToastType] = useState('success')

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if (fieldNames.fullName in fieldValues) {
      temp.fullName =
        fieldValues.fullName.trim() === ""
          ? messages.isRequired
          : isNameValid(fieldValues.fullName)
          ? ""
          : messages.notValid;
    }
    if (fieldNames.email in fieldValues) {
      temp.email =
        fieldValues.email.trim() === ""
          ? messages.isRequired
          : isEmailValid(fieldValues.email)
          ? ""
          : messages.notValid;
    }

    if (fieldNames.mobile in fieldValues)
      temp.mobile =
        fieldValues.mobile.length === 0
          ? messages.isRequired
          : isPhoneValid(fieldValues.mobile)
          ? ""
          : messages.notValid;

    if (fieldNames.companyName in fieldValues)
      temp.companyName =
        fieldValues.companyName.length === 0 ? messages.isRequired : fieldValues.companyName.length < 3 ? messages.companyNameLength : "";

    if (fieldNames.message in fieldValues)
      temp.message =
        fieldValues.message.length === 0 ? messages.isRequired : fieldValues.message.length < 30 ? messages.projectDetailValidationMessage : "";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === fieldNames.fullName && !isTypeAlphaSpace(value)) {
      return;
    }
    if (name === fieldNames.mobile && !isTypeNumPlusBracket(value)) {
      return;
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
      let requestBody = {
        name: values.fullName,
        email: values.email,
        companyName: values.companyName,
        phone: values.mobile,
        projectDetails: values.message,
      };
      setIsLoading(true)
      api.requestQuote(requestBody, createNewToken, isCancel).then((response)=>{
        setIsLoading(false)
        setToastOpen(true)
        if(response && response.data && response.data.status==="success")
        {
          setRequestMessage(response.data.status.toUpperCase()+": "+response.data.message)
          resetForm();
          setToastType('success')
        }else{
          setToastType('error')
          setRequestMessage(response.response.data.status.toUpperCase()+": "+response.response.data.error.errors[0].msg)
        }
      });
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
    handleSubmit,
    isLoading,
    toastOpen,
    setToastOpen,
    requestMessage,
    toastType
  };
}
