import { Grid, Paper, Typography } from "@material-ui/core";
import Section from "../Section";
import FactCard from "../../Components/FactCard";
import AboutMainSection from "../../Sections/MainComponent/AboutMainSection";
import Banner from "../../assets/ContactUs/banner.png";
import {
  RequestAQuote,
  RequestAQuoteSub,
  SomeQuickFactsAboutUs,
  AwardSectionTitleContactUs,
} from "../../Utils/Constants/Language/en/SectionHeaders";
import { Colors } from "../../Theme/color.constants";
import { LocationIcon, PhoneIcon } from "../../assets/icons/icon.constants";
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
import { footerText } from "../../Utils/Constants/Language";

const ContactUs = () => {
  const {
    mustardColor,
    darkBlueColor,
    orangeRed,
    spaceCadet,
    rosePinkColor,
    Luigi,
  } = Colors;

  const { awardSection, imageContainer, label, section, factCard } =
    ContactUsStyles();

  const { experience, team, customers, served, projects, customerRentention } =
    FactCardText;

  const { addressSection, talkToUsSection } = footerText;

  const breadcrumbs = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/request/a/quote",
      text: "Request A Quote",
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
                  <Grid container justify="center" item xs={12}>
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
                  <Grid
                    style={{ marginTop: "50px" }}
                    container
                    item
                    xs={12}
                    justify="center"
                  >
                    <Grid item xs={12} md={5}>
                      <div className={section}>
                        <img src={LocationIcon} alt="Location Icon" />
                        <Typography align="left" gutterBottom variant="h5">
                          {addressSection.title}
                        </Typography>
                        {addressSection.address.map((location, index) => (
                          <Typography
                            key={index}
                            align="left"
                            gutterBottom
                            variant="body2"
                          >
                            {location}
                          </Typography>
                        ))}
                      </div>
                    </Grid>

                    <Grid item xs={12} md={5}>
                      <div className={section}>
                        <img src={PhoneIcon} alt="Phone Icon" />
                        <Typography align="left" gutterBottom variant="h5">
                          {talkToUsSection.title}
                        </Typography>
                        {talkToUsSection.numbers.map((num, index) => (
                          <Typography
                            key={index}
                            align="left"
                            gutterBottom
                            variant="body2"
                          >
                            {num}
                          </Typography>
                        ))}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Section>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              // className={form}
              style={{
                boxShadow: "0px 4px 100px 5px rgba(0, 0, 0, 0.06)",
                padding: "50px 0",
              }}
            >
              <ContactUsForm styles={label} heading="Contact /Us" />
            </Paper>
          </Grid>
        </Grid>
      </Section>
      {/* SOME FACTS ABOUT US SECTION */}
      <Section title={SomeQuickFactsAboutUs}>
        <Grid container>
          <Grid className={factCard} item xs={12} md={6} lg={4}>
            <FactCard
              backColor={mustardColor}
              icon={ExperienceIcon}
              title={experience.title}
              subtitle={experience.subTitle}
            />
          </Grid>
          <Grid className={factCard} item xs={12} md={6} lg={4}>
            <FactCard
              backColor={darkBlueColor}
              icon={TeamIcon}
              title={team.title}
              subtitle={team.subTitle}
            />
          </Grid>
          <Grid className={factCard} item xs={12} md={6} lg={4}>
            <FactCard
              backColor={orangeRed}
              icon={CustomerIcon}
              title={customers.title}
              subtitle={customers.subTitle}
            />
          </Grid>
          <Grid className={factCard} item xs={12} md={6} lg={4}>
            <FactCard
              backColor={spaceCadet}
              icon={ServedIcon}
              title={served.title}
              subtitle={served.subTitle}
            />
          </Grid>
          <Grid className={factCard} item xs={12} md={6} lg={4}>
            <FactCard
              backColor={rosePinkColor}
              icon={ProjectIcon}
              title={projects.title}
              subtitle={projects.subTitle}
            />
          </Grid>
          <Grid className={factCard} item xs={12} md={6} lg={4}>
            <FactCard
              backColor={Luigi}
              icon={CertificationIcon}
              title={customerRentention.title}
              subtitle={customerRentention.subTitle}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default ContactUs;
