import { InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputField from "../../Components/FormInputs/InputField";
import SectionHeading from "../../Pages/Section/SectionHeading";
import { contactUsLabelsText } from "../../Utils/Constants/Language";
import CustomButton from "../CustomButton";
import FormStyles from "./style";

const ContactUsForm = (props) => {
  const { form, label, button } = FormStyles();

  const { subHeading, name, email, phoneNum, message, submit } =
    contactUsLabelsText;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <SectionHeading header={props.heading} />
      <Typography variant="subtitle1" color="textSecondary" component="h5">
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
          placeholder="e.g Jamshed Ahmed"
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
          placeholder="e.g abc@gmail.com"
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
        <div className={button}>
          <CustomButton
            type="submit"
            size="medium"
            variant="contained"
            text={submit}
          />
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
