export const validateContactUsForm = (
  values,
  errors,
  setErrors,
  fieldValues = values
) => {
  let temp = { ...errors };
  if (fieldNames.fullName in fieldValues)
    temp.fullName = fieldValues.fullName ? "" : messages.isRequired;
  if (fieldNames.email in fieldValues)
    temp.email =
      fieldValues.email.length === 0
        ? messages.isRequired
        : /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : messages.notValid.email;

  if (fieldNames.mobile in fieldValues)
    temp.mobile = fieldValues.mobile.length > 9 ? "" : messages.isRequired;

  if (fieldNames.companyName in fieldValues)
    temp.companyName =
      fieldValues.companyName.length !== 0 ? "" : messages.isRequired;

  if (fieldNames.message in fieldValues)
    temp.message = fieldValues.message.length !== 0 ? "" : messages.isRequired;

  setErrors({
    ...temp,
  });

  if (fieldValues === values) return Object.values(temp).every((x) => x === "");
};

export const messages = {
  isRequired: "This field is required.",
  notValid: {
    email: "Email is not Valid",
  },
};

export const fieldNames = {
  fullName: "fullName",
  email: "email",
  mobile: "mobile",
  companyName: "companyName",
  message: "message",
};
