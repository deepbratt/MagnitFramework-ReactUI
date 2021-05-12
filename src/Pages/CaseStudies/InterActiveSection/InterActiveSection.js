import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
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

const InterActiveSection = () => {
  const classes = useStyles();
  const text =
    "hello worldhello worldhdhello worldhello imaa baby girld worldhello world";
  return (
      <span className={classes.wrapper}>
        <MiddleImgBtn className={classes.middleImage} />
        <span className={classes.leftTop}>
          <CircleImageText
            innerImg={<Touch style={{ width: "40px" }} />}
            text={text}
          />
        </span>
        <span className={classes.leftMid}>
          <CircleImageText
            innerImg={<People style={{ width: "40px" }} />}
            text={text}
          />
        </span>
        <span className={classes.leftBottom}>
          <CircleImageText
            innerImg={<img src={Google} style={{ width: "40px" }} />}
            text={text}
          />
        </span>
        <span className={classes.rightTop}>
          <CircleImageText
            innerImg={<img src={LoveBirds} style={{ width: "40px" }} />}
            textRight={true}
            text={text}
          />
        </span>
        <span className={classes.rightMid}>
          <CircleImageText
            innerImg={<img src={MobileApp} style={{ width: "40px" }} />}
            textRight={true}
            text={text}
          />
        </span>
        <span className={classes.rightBottom}>
          <CircleImageText
            innerImg={<img src={MobileChat} style={{ width: "40px" }} />}
            textRight={true}
            text={text}
          />
        </span>
        <LeftLinksPath className={classes.leftPath} />
        <RightLinksPath className={classes.rightPath} />
      </span>
  );
};

export default withRouter(InterActiveSection);
