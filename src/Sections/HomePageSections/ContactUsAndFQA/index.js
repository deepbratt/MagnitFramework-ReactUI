import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image from "../../../assets/images/contact-us-banner.jpg";
import ContactUsForm from "../../../Components/ContactUsForm";
import MyAccordion from "../../../Components/MyAccordion";
import { FQASectionTitle,ContactUsTitle } from "../../../Pages/Home/constants";
import Section from "../../../Pages/Section/index";
import LayoutStyle from "./style";
import CustomTitle from "../../../Pages/Section/CustomTitle"

const ContactUsAndFQA = ({data,faqHeading}) => {
  const { root, wrap, content, cover, form, label } = LayoutStyle();

  return (
    <>
      <Card className={root}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item className={wrap}>
              <img className={cover} src={"https://cdn.themagnit.com/contact-us-banner.webp"} alt="home" />
              <CardContent className={content}>
                <ContactUsForm
                  className={form}
                  captionColor="navy"
                  styles={label}
                  color="white"
                  heading={ContactUsTitle}
                />
              </CardContent>
            </Grid>
          </Grid>
          <Grid style={{paddingTop: "20px"}} item xs={12} md={6}>
            <Section>
              <CustomTitle style={{marginBottom: "0px"}} text={faqHeading} underlined={true}/>
              <MyAccordion questions={data} />
            </Section>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ContactUsAndFQA;
