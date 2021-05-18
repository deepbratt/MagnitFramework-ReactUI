import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";
import { ReactComponent as MiddleImgBtn } from "../../../assets/CaseStudies/middle.svg";
import { ReactComponent as LeftLinksPath } from "../../../assets/CaseStudies/left_links.svg";
import { ReactComponent as RightLinksPath } from "../../../assets/CaseStudies/right_links.svg";
import { ReactComponent as People } from "../../../assets/CaseStudies/people.svg";
import { ReactComponent as Touch } from "../../../assets/CaseStudies/touch.svg";
import Google from "../../../assets/CaseStudies/google.svg";
import MobileChat from "../../../assets/CaseStudies/mobile-chat.svg";
import MobileApp from "../../../assets/CaseStudies/mobile-app.svg";
import LoveBirds from "../../../assets/CaseStudies/love-birds.svg";
import CircleImageText from "../../../Components/CircleImageText";
import { caseStudies } from "../../../Utils/Constants/Language";

const ResponsiveInterActiveSection = () => {
  const classes = useStyles();
  const text = caseStudies.demoText;
  return (
    <Grid
      container
      style={{ display: "flex"}}
      justify="center"
      wrap="wrap"
      spacing={0}
    >
      <Grid item xs={12}>
        <MiddleImgBtn className={classes.middleImage} />
      </Grid>
      <CircleImageText
        innerImg={<Touch style={{ width: "40px" }} />}
        text={text}
        textRight
      />
      <CircleImageText
        innerImg={<People style={{ width: "40px" }} />}
        text={text}
        textRight
      />
      <CircleImageText
        innerImg={<img src={Google} style={{ width: "40px" }} />}
        text={text}
        textRight
      />
      <CircleImageText
        innerImg={<img src={LoveBirds} style={{ width: "40px" }} />}
        textRight
        text={text}
      />
      <CircleImageText
        innerImg={<img src={MobileApp} style={{ width: "40px" }} />}
        textRight
        text={text}
      />
      <CircleImageText
        innerImg={<img src={MobileChat} style={{ width: "40px" }} />}
        textRight
        text={text}
      />
    </Grid>
  );
};

export default ResponsiveInterActiveSection;
