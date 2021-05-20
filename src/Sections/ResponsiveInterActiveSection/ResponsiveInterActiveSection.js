import { Grid, Link } from "@material-ui/core";
import React from "react";
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
  const text = caseStudies.demoText;
  const history = useHistory()
  return (
    <Grid
      container
      style={{ display: "flex"}}
      justify="center"
      wrap="wrap"
      spacing={0}
    >
      <Grid item xs={12}>
        <MiddleImgBtn className={classes.middleImage} onClick={()=>{history.push('/')}}/>
      </Grid>
      <CircleImageText
        innerImg={<Touch style={{ width: "40px"}} />}
        text={text}
        textRight
        clickHandler={()=>{(props.scrollRef.current[0].current.scrollIntoView())}}
      />
      <CircleImageText
        innerImg={<People style={{ width: "40px" }} />}
        text={text}
        textRight
        clickHandler={()=>{(props.scrollRef.current[1].current.scrollIntoView())}}
      />
      <CircleImageText
        innerImg={<img src={Google} style={{ width: "40px" }} />}
        text={text}
        textRight
        clickHandler={()=>{(props.scrollRef.current[2].current.scrollIntoView())}}
      />
      <CircleImageText
        innerImg={<img src={LoveBirds} style={{ width: "40px" }} />}
        textRight
        text={text}
        clickHandler={()=>{(props.scrollRef.current[3].current.scrollIntoView())}}
      />
      <CircleImageText
        innerImg={<img src={MobileApp} style={{ width: "40px" }} />}
        textRight
        text={text}
        clickHandler={()=>{(props.scrollRef.current[4].current.scrollIntoView())}}
      />
      <CircleImageText
        innerImg={<img src={MobileChat} style={{ width: "40px" }} />}
        textRight
        text={text}
        clickHandler={()=>{(props.scrollRef.current[5].current.scrollIntoView())}}
      />
    </Grid>
  );
};

export default ResponsiveInterActiveSection;
