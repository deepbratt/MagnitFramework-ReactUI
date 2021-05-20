import { Button, Grid, InputLabel } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import image from "../../../assets/images/contact-us-banner.jpg";
import ContactUsForm from "../../../Components/ContactUsForm";
import InputField from "../../../Components/FormInputs/InputField";
import MyAccordion from "../../../Components/MyAccordion";
import { contactUsLabelsText } from "../../../Utils/Constants/Language";
import { FQASectionTitle } from "../../../Pages/Home/constants";
import Section from "../../../Pages/Section/index";
import QuestionData from "./questions.json";
import LayoutStyle from "./style";

const ContactUsAndFQA = () => {
  const { root, wrap, content, cover, form } = LayoutStyle();

  return (
    <>
      <Card className={root}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item className={wrap}>
              <img className={cover} src={image} alt="A lady with laptop" />
              <CardContent className={content}>
                <ContactUsForm className={form} />
              </CardContent>
            </Grid>
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

export default ContactUsAndFQA;
