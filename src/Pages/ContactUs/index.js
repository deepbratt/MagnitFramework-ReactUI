import { useState, useEffect, useCallback } from "react";
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
  WorkFlow,
} from "../../Utils/Constants/Language/en/SectionHeaders";
import { Colors } from "../../Theme/color.constants";
import { LocationIcon, PhoneIcon } from "../../assets/icons/icon.constants";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
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
import flowchart from "../../assets/ContactUs/flowchart.png";
import CustomTitle from "../Section/CustomTitle";
import { ContactUsTitle } from "../Home/constants";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import MetaTags from "../../Components/MetaTags";
import { Loader } from "../../Components/loader";

const ContactUs = () => {
  const {
    mustardColor,
    darkBlueColor,
    orangeRed,
    spaceCadet,
    rosePinkColor,
    Luigi,
  } = Colors;
  const { hero } = useStyles();

  const { awardSection, imageContainer, label, section, factCard, location } =
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
      path: "/request/quote",
      text: "Request A Quote",
    },
  ];

  const [metaData, setMetaData] = useState({});
  const [sections, setSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = useCallback(async () => {
    setIsLoading(true);
    await getPageDataApi("request-a-quote")
      .then((response) => {
        if (response.status === "success") {
          console.log("response", response);
          setMetaData(response.data.result.metaData);
          setSections(response.data.result.sections);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  useEffect(() => {
    getPageData();
    console.log("useEffect");
  }, [getPageData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container>
          <MetaTags
            title={metaData.title}
            description={metaData.description}
            canonical={metaData.canonical}
            keywords={metaData.keywords}
          />
          <Grid item xs={12}>
            <AboutMainSection
              hero={sections.banner.dataArray[0].image}
              card={false}
              breadcrumbData={breadcrumbs}
              width="600px"
              class={hero}
            />
          </Grid>
          <Section>
            <CustomTitle
              style={{ marginBottom: "20px" }}
              text={WorkFlow}
              underlined={true}
            />
            <CustomTitle subTitle={RequestAQuoteSub} />
            <Grid item xs={12}>
              <img src={flowchart} alt="d" style={{ width: "100%" }} />
            </Grid>
          </Section>
          <Section>
            <CustomTitle
              style={{ marginBottom: "20px" }}
              text={RequestAQuote}
              underlined={true}
            />
            <CustomTitle subTitle={RequestAQuoteSub} />
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
                              key={index + "awrdssection"}
                              className={imageContainer}
                            >
                              <img src={image} alt={`client${index}`} />
                            </Grid>
                          ))}
                      </Grid>
                      <Grid className={location} container item xs={12}>
                        <Grid item xs={10} md={5}>
                          <div className={section}>
                            <img src={LocationIcon} alt="Location Icon" />
                            <Typography align="left" gutterBottom variant="h5">
                              {addressSection.title}
                            </Typography>
                            {addressSection.address.map((location, index) => (
                              <Typography
                                key={(index = "addresses")}
                                align="left"
                                gutterBottom
                                variant="caption"
                              >
                                {location}
                              </Typography>
                            ))}
                          </div>
                        </Grid>

                        <Grid item xs={10} md={5}>
                          <div className={section}>
                            <img src={PhoneIcon} alt="Phone Icon" />
                            <Typography align="left" gutterBottom variant="h5">
                              {talkToUsSection.title}
                            </Typography>
                            {talkToUsSection.numbers.map((num, index) => (
                              <Typography
                                key={index + "talktousnumber"}
                                align="left"
                                gutterBottom
                                variant="caption"
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
                  <ContactUsForm
                    styles={label}
                    bool={true}
                    heading={ContactUsTitle}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Section>
          {/* SOME FACTS ABOUT US SECTION */}
          <Section>
            <CustomTitle text={SomeQuickFactsAboutUs} underlined={true} />
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
        </Grid>
      )}
    </>
  );
};

export default ContactUs;
