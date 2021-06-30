import { useState, useEffect, useCallback } from "react";
import Section from "../Section";
import MetaTags from "../../Components/MetaTags";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import FactCard from "../../Components/FactCard";
import { Loader } from "../../Components/loader";
import CustomTitle from "../Section/CustomTitle";
import { ContactUsTitle } from "../Home/constants";
import ContactUsForm from "../../Components/ContactUsForm";
import { footerText } from "../../Utils/Constants/Language";
import AboutMainSection from "../../Sections/MainComponent/AboutMainSection";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import ContactUsStyles from "./style";
import { LocationIcon, PhoneIcon } from "../../assets/icons/icon.constants";

const ContactUs = () => {
  const { hero } = useStyles();

  const { awardSection, imageContainer, label, section, factCard, location } =
    ContactUsStyles();

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
          <Grid style={{ order: sections.banner.order }} item xs={12}>
            <AboutMainSection
              data={sections.banner.dataArray[0]}
              breadcrumbData={breadcrumbs}
              width="600px"
              class={hero}
            />
          </Grid>
          <Grid style={{ order: sections.workFlow.order }} item xs={12}>
            <Section>
              <CustomTitle
                style={{ marginBottom: "20px" }}
                text={sections.workFlow.title}
                underlined={true}
              />
              <CustomTitle subTitle={sections.workFlow.subTitle} />
              <Grid item xs={12}>
                <img
                  src={sections.workFlow.dataArray[0].image}
                  alt="Magnit workFlow"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Section>
          </Grid>
          <Grid style={{ order: sections.awards.order }} item xs={12}>
            <Section>
              <CustomTitle
                style={{ marginBottom: "20px" }}
                text={sections.awards.title}
                underlined={true}
              />
              <CustomTitle subTitle={sections.awards.subTitle} />
              <Grid container>
                <Grid item xs={12} md={7}>
                  <div style={{ margin: "50px 0" }} className={awardSection}>
                    <Section>
                      <Grid container item xs={12}>
                        <Grid container justify="center" item xs={12}>
                          {sections.awards.dataArray &&
                            sections.awards.dataArray.map((awards, index) => (
                              <Grid
                                item
                                xs={12}
                                md={3}
                                key={index + "awrdssection"}
                                className={imageContainer}
                              >
                                <img
                                  src={awards.image}
                                  alt={`client${index}`}
                                />
                              </Grid>
                            ))}
                        </Grid>
                        <Grid className={location} container item xs={12}>
                          <Grid item xs={10} md={5}>
                            <div className={section}>
                              <img src={LocationIcon} alt="Location Icon" />
                              <Typography
                                align="left"
                                gutterBottom
                                variant="h5"
                              >
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
                              <Typography
                                align="left"
                                gutterBottom
                                variant="h5"
                              >
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
          </Grid>

          {/* SOME FACTS ABOUT US SECTION */}
          <Grid style={{ order: sections.factsAboutUs.order }} item xs={12}>
            <Section>
              <CustomTitle
                text={sections.factsAboutUs.title}
                underlined={true}
              />
              <Grid container>
                {sections.factsAboutUs &&
                  sections.factsAboutUs.dataArray.map((fact, index) => (
                    <Grid className={factCard} item xs={12} md={6} lg={4}>
                      <FactCard
                        key={`${fact.tile}-${index}`}
                        backColor={fact.color}
                        icon={fact.icon}
                        title={fact.title}
                        subtitle={fact.text}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Section>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ContactUs;
