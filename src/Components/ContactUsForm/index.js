import { Button, InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputField from "../../Components/FormInputs/InputField";
import { contactUsLabelsText } from "../../Utils/Constants/Language";
import FormStyles from "./style";

const ContactUsForm = () => {
  const { form, label, button } = FormStyles();

  const {
    heading,
    subHeading,
    name,
    email,
    phoneNum,
    message,
    submit,
  } = contactUsLabelsText;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <Typography variant="h2">{heading}</Typography>
      <Typography variant="subtitle1" color="textSecondary" component="h5">
        {subHeading}
      </Typography>

      <form className={form} onSubmit={handleSubmit}>
        <InputLabel className={label} htmlFor="input-name">
          {name}
        </InputLabel>

        <InputField
          id="input-name"
          name="name"
          fullWidth
          placeholder="e.g Jamshed Ahmed"
        />

        <InputLabel className={label} htmlFor="input-email">
          {email}
        </InputLabel>

        <InputField
          id="input-email"
          fullWidth
          placeholder="e.g abc@gmail.com"
        />

        <InputLabel className={label} htmlFor="input-phone">
          {phoneNum}
        </InputLabel>

        <InputField id="input-phone" fullWidth placeholder="+1 225 8777 461" />

        <InputLabel className={label} htmlFor="input-message">
          {message}
        </InputLabel>

        <InputField
          id="input-message"
          fullWidth
          placeholder="Type your message here..."
          multiline
        />
        <div className={button}>
          <Button
            type="submit"
            size="small"
            color="primary"
            variant="contained"
          >
            <Typography
              style={{ textAlign: "center", color: "#fff" }}
              variant="button"
            >
              {submit}
            </Typography>
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
