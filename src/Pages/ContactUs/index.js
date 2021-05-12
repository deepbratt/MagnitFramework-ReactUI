import { Grid, Paper } from "@material-ui/core";
import Section from "../Section";
import FactCard from "../../Components/FactCard";
import AboutMainSection from "../AboutUs/MainComponent/AboutMainSection";
import Banner from "../../assets/ContactUs/banner.png";
import {
  RequestAQuote,
  RequestAQuoteSub,
  SomeQuickFactsAboutUs,
  AwardSectionTitleContactUs,
} from "../../Utils/Constants/Language/en/SectionHeaders";
import { Colors } from "../../Theme/color.constants";
import { FactCardText } from "../../Utils/Constants/Language/en/ContactUsPageText";
import ContactUsForm from "../../Components/ContactUsForm";
import {
  ExperienceIcon,
  TeamIcon,
  CustomerIcon,
  ServedIcon,
  ProjectIcon,
  CertificationIcon,
} from "../../assets/icons/icon.constants";
import { AwardSectionImages } from "../Home";
import ContactUsStyles from "./style";

const ContactUs = () => {
  const {
    mustardColor,
    darkBlueColor,
    orangeRed,
    spaceCadet,
    rosePinkColor,
    Luigi,
  } = Colors;

  const { root, awardSection, imageContainer } = ContactUsStyles();

  const { experience, team, customers, served, projects, certification } =
    FactCardText;

  const breadcrumbs = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/contactUs",
      text: "Contact Us",
    },
  ];
  return (
    <>
      <Grid item xs={12}>
        <AboutMainSection
          hero={Banner}
          card={false}
          breadcrumbData={breadcrumbs}
        />
      </Grid>
      <Section title={RequestAQuote} subTitle={RequestAQuoteSub}>
        <Grid container>
          <Grid item xs={12} md={7}>
            <div style={{ margin: "50px 0" }} className={awardSection}>
              <Section title={AwardSectionTitleContactUs}>
                <Grid container item xs={12}>
                  {AwardSectionImages &&
                    AwardSectionImages.map((image, index) => (
                      <Grid
                        item
                        xs={12}
                        md={3}
                        key={index}
                        className={imageContainer}
                      >
                        <img src={image} alt={`client${index}`} />
                      </Grid>
                    ))}
                </Grid>
              </Section>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              // className={form}
              style={{ boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)" }}
            >
              <ContactUsForm />
            </Paper>
          </Grid>
        </Grid>
      </Section>
      {/* SOME FACTS ABOUT US SECTION */}
      <Section title={SomeQuickFactsAboutUs}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={mustardColor}
              icon={ExperienceIcon}
              title={experience.title}
              subtitle={experience.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={darkBlueColor}
              icon={TeamIcon}
              title={team.title}
              subtitle={team.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={orangeRed}
              icon={CustomerIcon}
              title={customers.title}
              subtitle={customers.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={spaceCadet}
              icon={ServedIcon}
              title={served.title}
              subtitle={served.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={rosePinkColor}
              icon={ProjectIcon}
              title={projects.title}
              subtitle={projects.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={Luigi}
              icon={CertificationIcon}
              title={certification.title}
              subtitle={certification.subTitle}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default ContactUs;
