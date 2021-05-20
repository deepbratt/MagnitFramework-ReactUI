import { InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import InputField from "../../Components/FormInputs/InputField";
import SectionHeading from "../../Pages/Section/SectionHeading";
import { contactUsLabelsText } from "../../Utils/Constants/Language";
import CustomButton from "../CustomButton";
import FormStyles from "./style";

const ContactUsForm = (props) => {
  const { form, label, button, privacyPolicy } = FormStyles();

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
    console.log(e);
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
          name="name"
          fullWidth
          placeholder="e.g John Martin"
        />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-email"
        >
          {email}
        </InputLabel>

        <InputField
          id="input-email"
          fullWidth
          placeholder="e.g johnmartin@mail.com"
        />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-companyName"
        >
          {companyName}
        </InputLabel>

        <InputField
          id="input-companyName"
          fullWidth
          placeholder="XYZ Company"
        />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-phone"
        >
          {phoneNum}
        </InputLabel>

        <InputField id="input-phone" fullWidth placeholder="+1 225 8777 461" />

        <InputLabel
          className={`${label} ${props.styles}`}
          htmlFor="input-message"
        >
          {message}
        </InputLabel>

        <InputField
          id="input-message"
          fullWidth
          placeholder="Type your message here..."
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
