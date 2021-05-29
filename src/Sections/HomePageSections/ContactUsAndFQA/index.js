import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "../../../assets/images/contact-us-banner.jpg";
import ContactUsForm from "../../../Components/ContactUsForm";
import MyAccordion from "../../../Components/MyAccordion";
import { FQASectionTitle } from "../../../Pages/Home/constants";
import Section from "../../../Pages/Section/index";
import QuestionData from "./questions.json";
import LayoutStyle from "./style";
import CustomTitle from "../../../Pages/Section/CustomTitle"

const ContactUsAndFQA = () => {
  const { root, wrap, content, cover, form, label } = LayoutStyle();

  return (
    <>
      <Card className={root}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item className={wrap}>
              <img className={cover} src={image} alt="A lady with laptop" />
              <CardContent className={content}>
                <ContactUsForm
                  className={form}
                  captionColor="navy"
                  styles={label}
                  color="white"
                  heading="Contact Us"
                />
              </CardContent>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Section>
              <CustomTitle style={{marginBottom: "0px"}} text={FQASectionTitle} underlined={true}/>
              <MyAccordion questions={QuestionData} />
            </Section>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ContactUsAndFQA;
