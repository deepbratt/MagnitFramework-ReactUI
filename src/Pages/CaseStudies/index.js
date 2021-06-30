import { Grid, Hidden } from "@material-ui/core";
import React, {
  useState,
  useEffect,
  useCallback,
  createRef,
  useRef,
} from "react";
import { withRouter } from "react-router";
// import Banner from "../../Components/Banner";
import Section from "../Section";
// import useStyles from "./InterActiveSection/useStyles";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { caseStudies } from "../../Utils/Constants/Language";
import Image1 from "../../assets/images/awardAccredationSection/image 2.png";
import Image2 from "../../assets/images/awardAccredationSection/image 3.png";
import Image3 from "../../assets/images/awardAccredationSection/image 4.png";
import Image4 from "../../assets/images/awardAccredationSection/image 5.png";
import Image5 from "../../assets/images/awardAccredationSection/image 6.png";
import CustomImage from "../../Components/CustomImage";
import { Loader } from "../../Components/loader";
import MetaTags from "../../Components/MetaTags";
import { Colors } from "../../Theme/color.constants";
import AboutMainSection from "../../Sections/MainComponent/AboutMainSection";
import ResponsiveInterActiveSection from "../../Sections/ResponsiveInterActiveSection/ResponsiveInterActiveSection";
import InterActiveSection from "../../Sections/InterActiveSection/InterActiveSection";
import FaqNonInteractive from "../../Sections/FaqNonInteractive/FaqNonInteractive";
import CustomTitle from "../Section/CustomTitle";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";

const CaseStudies = () => {
  const [metaData, setMetaData] = useState({});
  const [sections, setSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { img } = useStyles();
  const AwardSectionImages = [Image1, Image2, Image3, Image4, Image5];
  const colors = Colors;
  const faqData = caseStudies.faqs;
  const arrLength = faqData.length;
  const elRefs = useRef([]);

  if (elRefs.current.length !== arrLength) {
    // add or remove refs
    elRefs.current = Array(arrLength)
      .fill()
      .map((_, i) => elRefs.current[i] || createRef());
  }
  const breadcrumbData = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/caseStudies",
      text: "Case Studies",
    },
  ];

  const getPageData = useCallback(async () => {
    setIsLoading(true);
    await getPageDataApi("case-studies")
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
              card={false}
              breadcrumbData={breadcrumbData}
              width="850px"
              class={img}
            />
          </Grid>
          <Grid
            style={{
              order: sections.caseStudies.order,
              display: "flex",
              marginBottom: "150px",
              marginTop: "100px",
            }}
            container
            item
            xs={12}
            justify="center"
          >
            <Section>
              <CustomTitle
                style={{ marginBottom: "20px" }}
                text={sections.caseStudies.title}
                underlined={true}
              />
              <CustomTitle subTitle={sections.caseStudies.subTitle} />
            </Section>
            <Grid
              style={{
                display: "flex",
                marginBottom: "150px",
                marginTop: "100px",
              }}
              item
              xs={12}
              justify="center"
            >
              <Hidden lgUp>
                <span style={{ marginTop: "-280px", marginBottom: "-250px" }}>
                  <Section>
                    <ResponsiveInterActiveSection
                      scrollRef={elRefs}
                      data={sections.caseStudies.dataArray}
                    />
                  </Section>
                </span>
              </Hidden>
              <Hidden mdDown>
                <Section>
                  <InterActiveSection scrollRef={elRefs} textData={faqData} />
                </Section>
              </Hidden>
            </Grid>
            <Grid item xs={12}>
              <Section>
                {/* <FaqNonInteractive toRight/> */}
                {sections.caseStudies.dataArray.map((item, index) => (
                  <div
                    key={"faq-" + index}
                    style={{ paddingTop: "70px" }}
                    ref={elRefs.current[index]}
                  >
                    <FaqNonInteractive
                      toRight={index % 2 === 0 ? false : true}
                      question={item.title}
                      answer={item.text}
                    />
                  </div>
                ))}
              </Section>
            </Grid>
          </Grid>

          <Grid style={{ order: sections.awards.order }} item xs={12}>
            {/* AWARD AND ACCREDITATIONS SECTION */}
            <Section>
              <CustomTitle text={caseStudies.awardsTitle} underlined={true} />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {sections.awards.dataArray &&
                  sections.awards.dataArray.map((award, index) => (
                    <CustomImage
                      key={(index = "awards")}
                      style={{
                        margin: "10px 40px",
                        width: "130px",
                        color: colors.Mirage,
                      }}
                      src={award.image}
                      alt={`client${index}`}
                    />
                  ))}
              </div>
            </Section>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default withRouter(CaseStudies);
