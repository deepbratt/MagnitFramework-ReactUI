import { Button, Grid, InputLabel } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/images/contact-us-banner.jpg";
import InputField from "../../Components/FormInputs/InputField";
import MyAccordion from "../../Components/MyAccordion";
import { FQASectionTitle } from "../Home/constants";
import Section from "../Section";
import QuestionData from "./questions.json";
import LayoutStyle from "./style";

const ContactUs = () => {
  const { root, wrap, cover, form, label } = LayoutStyle();

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
                  color: "#fff",
                  minHeight:"100%"
                }}
              >
                <Typography
                  style={{ textAlign: "center", marginTop: "30px" }}
                  variant="h2"
                >
                  Contact Us
                </Typography>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  Need any kind of help?
                </Typography>

                <form className={form} onSubmit={handleSubmit}>
                  <InputLabel className={label} htmlFor="input-name">
                    Name
                  </InputLabel>

                  <InputField
                    id="input-name"
                    name="name"
                    fullWidth
                    placeholder="e.g Jamshed Ahmed"
                  />

                  <InputLabel className={label} htmlFor="input-email">
                    Email
                  </InputLabel>

                  <InputField
                    id="input-email"
                    fullWidth
                    placeholder="e.g abc@gmail.com"
                  />

                  <InputLabel className={label} htmlFor="input-phone">
                    Phone Number
                  </InputLabel>

                  <InputField
                    id="input-phone"
                    fullWidth
                    placeholder="+1 225 8777 461"
                  />

                  <InputLabel className={label} htmlFor="input-message">
                    Message
                  </InputLabel>

                  <InputField
                    id="input-message"
                    fullWidth
                    placeholder="Type your message here..."
                    multiline
                  />

                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    <Typography
                      style={{ textAlign: "center", color: "#fff" }}
                      variant="button"
                    >
                      Submit
                    </Typography>
                  </Button>
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
