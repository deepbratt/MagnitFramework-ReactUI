import { InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import InputField from "../../Components/FormInputs/InputField";
import SectionHeading from "../../Pages/Section/SectionHeading";
import { contactUsLabelsText } from "../../Utils/Constants/Language";
import CustomButton from "../CustomButton";
import FormStyles from "./style";
import { useForm } from "./useForm";
import {
  messages,
  fieldNames,
  regex,
} from "../../Utils/Constants/ContactUsForm.js";

const initialFValues = {
  fullName: "",
  email: "",
  mobile: "",
  companyName: "",
  message: "",
};

const ContactUsForm = (props) => {
  const { form, label, button, privacyPolicy } = FormStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if (fieldNames.fullName in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : messages.isRequired;
    if (fieldNames.email in fieldValues)
      temp.email =
        fieldValues.email.length === 0
          ? messages.isRequired
          : regex.email.test(fieldValues.email)
          ? ""
          : messages.notValid.email;

    if (fieldNames.mobile in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : messages.isRequired;

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

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const {
    subHeading,
    name,
    email,
    phoneNum,
    companyName,
    message,
    submit,
    privacy,
  } = contactUsLabelsText;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
      resetForm();
    }
  };

  return (
    <>
      <SectionHeading color={`${props.color}`} header={props.heading} />
      <Typography variant="subtitle2" color="textSecondary" component="h5">
        {subHeading}
      </Typography>

      <form className={form} onSubmit={handleSubmit}>
        <InputLabel className={`${label} ${props.styles}`} htmlFor="input-name">
          {name}
        </InputLabel>

        <InputField
          id="input-name"
          name={fieldNames.fullName}
          fullWidth
          placeholder="e.g John Martin"
          value={values.fullName}
          onChange={handleInputChange}
          error={errors.fullName}
        />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-email"
        >
          {email}
        </InputLabel>

        <InputField
          id="input-email"
          name={fieldNames.email}
          fullWidth
          placeholder="e.g johnmartin@gmail.com"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
        />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-companyName"
        >
          {companyName}
        </InputLabel>

        <InputField
          id="input-companyName"
          name={fieldNames.companyName}
          fullWidth
          placeholder="XYZ Company"
          value={values.companyName}
          onChange={handleInputChange}
          error={errors.companyName}
        />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-phone"
        >
          {phoneNum}
        </InputLabel>

        <InputField
          id="input-phone"
          name={fieldNames.mobile}
          fullWidth
          placeholder="+1 225 8777 461"
          value={values.mobile}
          onChange={handleInputChange}
          error={errors.mobile}
        />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-message"
        >
          {message}
        </InputLabel>

        <InputField
          id="input-message"
          name={fieldNames.message}
          fullWidth
          placeholder="Type your message here..."
          value={values.message}
          onChange={handleInputChange}
          error={errors.message}
          multiline
        />

        <div className={privacyPolicy}>
          <InfoOutlinedIcon
            fontSize="medium"
            style={{ color: props.captionColor }}
          />
          <Typography
            style={{ color: props.captionColor }}
            variant="caption"
            component="p"
          >
            {privacy}
          </Typography>
        </div>

        <CustomButton
          className={button}
          fullWidth
          type="submit"
          size="medium"
          variant="contained"
        >
          {submit}
        </CustomButton>
      </form>
    </>
  );
};

export default ContactUsForm;
