import { Grid, Hidden, Typography } from "@material-ui/core";
import React, { createRef, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import Banner from "../../Components/Banner";
import Section from "../Section";
import InterActiveSection from "./InterActiveSection/InterActiveSection";
import useStyles from "./InterActiveSection/useStyles";
import businessPeople from "../../assets/CaseStudies/businessPeople.png";
import AboutMainSection from "../AboutUs/MainComponent/AboutMainSection";
import { caseStudies } from "../../Utils/Constants/Language";
import ResponsiveInterActiveSection from "./ResponsiveInterActiveSection/ResponsiveInterActiveSection";
import FaqNonInteractive from "./FaqNonInteractive/FaqNonInteractive";
import Image1 from "../../assets/images/awardAccredationSection/image 2.png";
import Image2 from "../../assets/images/awardAccredationSection/image 3.png";
import Image3 from "../../assets/images/awardAccredationSection/image 4.png";
import Image4 from "../../assets/images/awardAccredationSection/image 5.png";
import Image5 from "../../assets/images/awardAccredationSection/image 6.png";
import CustomImage from "../../Components/CustomImage";
import {Colors} from '../../Theme/color.constants'


const CaseStudies = () => {
  const classes = useStyles();
  const AwardSectionImages = [Image1, Image2, Image3, Image4, Image5];
  const colors =Colors
  const caseStudiesText = caseStudies
  const faqData = [
    {que: caseStudiesText.faqQuestions, ans: caseStudiesText.faqAns},
    {que: caseStudiesText.faqQuestions, ans: caseStudiesText.faqAns},
    {que: caseStudiesText.faqQuestions, ans: caseStudiesText.faqAns},
    {que: caseStudiesText.faqQuestions, ans: caseStudiesText.faqAns},
    {que: caseStudiesText.faqQuestions, ans: caseStudiesText.faqAns},
    {que: caseStudiesText.faqQuestions, ans: caseStudiesText.faqAns},
  ]
  const arrLength = faqData.length;
  const elRefs = useRef([]);


  if (elRefs.current.length !== arrLength) {
    // add or remove refs
    elRefs.current = Array(arrLength).fill().map((_, i) => elRefs.current[i] || createRef());
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
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <Banner breadCrumb="Home / Case Studies" image={businessPeople} /> */}
        <AboutMainSection
          hero={businessPeople}
          card={false}
          breadcrumbData={breadcrumbData}
        />
      </Grid>
      <Grid item xs={12}>
        <Section
          title={caseStudies.heading}
          subTitle={caseStudies.subHeading}
        ></Section>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", minHeight: "55vh" }}
        justify="center"
      >
        <Hidden lgUp>
          <span style={{marginTop:"-120px"}}>
            <ResponsiveInterActiveSection scrollRef={elRefs}/>
          </span>
        </Hidden>
        <Hidden mdDown>
          <Section>
            <InterActiveSection scrollRef={elRefs}/>
          </Section>
        </Hidden>
      </Grid>
      <Grid item xs={12} style={{display:"flex"}}>
        <Section>
          {/* <FaqNonInteractive toRight/> */}
          {faqData.map((item, index)=>(
            <div key={'faq-'+index} style={{paddingTop:"50px"}} ref={elRefs.current[index]}>
              <FaqNonInteractive toRight={index%2===0 ? false : true} question={item.que} answer={item.ans}/>
            </div>
          ))}
        </Section>
      </Grid>
      <Grid item xs={12} style={{display:"flex"}}>
        {/* AWARD AND ACCREDITATIONS SECTION */}
      <Section title={caseStudies.awardsTitle}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {AwardSectionImages &&
            AwardSectionImages.map((image, index) => (
              <CustomImage
                key={index}
                style={{ margin: "10px 40px", width: "130px", color: colors.Mirage }}
                src={image}
                alt={`client${index}`}
              />
            ))}
        </div>
      </Section>
      </Grid>
    </Grid>
  );
};

export default withRouter(CaseStudies);
