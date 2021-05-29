import {
  CircularProgress,
  Grid,
  InputLabel,
  Snackbar,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import InputField from "../../Components/FormInputs/InputField";
import CustomTitle from "../../Pages/Section/CustomTitle";
import { contactUsLabelsText } from "../../Utils/Constants/Language";
import CustomButton from "../CustomButton";
import FormStyles from "./style";
import { useForm } from "./useForm";
import { fieldNames } from "../../Utils/Constants/ContactUsForm.js";
import Section from "../../Pages/Section"

const ContactUsForm = (props) => {
  const { form, label, button, privacyPolicy } = FormStyles();
  const {
    values,
    errors,
    handleInputChange,
    handleSubmit,
    isLoading,
    toastOpen,
    setToastOpen,
    requestMessage,
  } = useForm(true);

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

  return (
    <>
     
     <Section>
      <CustomTitle style={{marginBottom: "0px"}} underlined={props.bool} subTitle={subHeading} subTitleColor={`${props.color}`} color={`${props.color}`} text={props.heading} />
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
          <InfoOutlinedIcon style={{ color: props.captionColor }} />
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
          disabled={isLoading}
        >
          {isLoading ? (
            <Grid container justify="center">
              <CircularProgress />
            </Grid>
          ) : (
            submit
          )}
        </CustomButton>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={toastOpen}
          onClose={() => setToastOpen(false)}
          autoHideDuration={5000}
          message={requestMessage}
        />
      </form>
      </Section>
    </>
  );
};

export default ContactUsForm;
