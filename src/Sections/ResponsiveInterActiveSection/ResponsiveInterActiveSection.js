import { Grid, Link } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./useStyles";
import { ReactComponent as MiddleImgBtn } from "../../assets/CaseStudies/middle.svg";
import { ReactComponent as People } from "../../assets/CaseStudies/people.svg";
import { ReactComponent as Touch } from "../../assets/CaseStudies/touch.svg";
import Google from "../../assets/CaseStudies/google.svg";
import MobileChat from "../../assets/CaseStudies/mobile-chat.svg";
import MobileApp from "../../assets/CaseStudies/mobile-app.svg";
import LoveBirds from "../../assets/CaseStudies/love-birds.svg";
import CircleImageText from "../../Components/CircleImageText";
import { caseStudies } from "../../Utils/Constants/Language";
import { useHistory } from "react-router";

const ResponsiveInterActiveSection = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dataText = props.textData
  const iconsArray = [
    <People style={{ width: "40px" }} />,
    <Touch style={{ width: "40px" }} />,
    <img src={Google} style={{ width: "40px" }} />,
    <img src={MobileChat} style={{ width: "40px" }} />,
    <img src={MobileApp} style={{ width: "40px" }} />,
    <img src={LoveBirds} style={{ width: "40px" }} />,
  ];
  return (
    <Grid
      container
      style={{ display: "flex"}}
      justify="space-evenly"
      wrap="wrap"
      spacing={0}
    >
      <Grid item xs={12}>
        <MiddleImgBtn
          className={classes.middleImage}
          onClick={() => {
            history.push("/");
          }}
        />
      </Grid>
      {dataText.map((item,index)=>(
        <CircleImageText
        key={"responsiveInteractive-"+index}
        innerImg={iconsArray[index]}
        text={item.faqQuestion}
        textRight
        clickHandler={() => {
          props.scrollRef.current[index].current.scrollIntoView();
        }}
      />
      ))}
    </Grid>
  );
};

export default ResponsiveInterActiveSection;
