import { Button, Grid, InputLabel } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/images/contact-us-banner.jpg";
import InputField from "../../Components/FormInputs/InputField";
import MyAccordion from "../../Components/MyAccordion";
import { contactUsLabelsText } from "../../Utils/Constants/Language";
import { FQASectionTitle } from "../Home/constants";
import Section from "../Section";
import QuestionData from "./questions.json";
import LayoutStyle from "./style";

const ContactUs = () => {
  const { root, wrap, cover, form, label, button } = LayoutStyle();
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
      <Card className={root}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={wrap}>
              <img className={cover} src={image} alt="A lady with laptop" />
              <CardContent
                style={{
                  background:
                    "linear-gradient(223.7deg, rgba(11, 102, 35, 0.56) 0%, rgba(0, 104, 250, 0.56) 133.78%)",
                  color: "white",
                  minHeight: "100%",
                }}
              >
                <Typography
                  style={{ textAlign: "center", marginTop: "30px" }}
                  variant="h2"
                >
                  {heading}
                </Typography>
                <Typography
                  style={{ textAlign: "center", color: "white" }}
                  variant="subtitle1"
                  color="textSecondary"
                >
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

                  <InputField
                    id="input-phone"
                    fullWidth
                    placeholder="+1 225 8777 461"
                  />

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
                    <Button type="submit" color="primary" variant="contained">
                      <Typography
                        style={{ textAlign: "center", color: "#fff" }}
                        variant="button"
                      >
                        {submit}
                      </Typography>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Section title={FQASectionTitle}>
              <MyAccordion questions={QuestionData} />
            </Section>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ContactUs;
