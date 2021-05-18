import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory, withRouter } from "react-router";
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

const InterActiveSection = (props) => {
  const classes = useStyles();
  const text = caseStudies.demoText;
  const history = useHistory()
  return (
    // <span className={classes.root}>
      <span className={classes.wrapper}>
        <MiddleImgBtn className={classes.middleImage} onClick={()=>{history.push('/')}}/>
        <span className={classes.leftTop}>
          <CircleImageText
            innerImg={<Touch style={{ width: "40px" }} />}
            text={text}
            clickHandler={()=>{(props.scrollRef.current[0].current.scrollIntoView())}}
          />
        </span>
        <span className={classes.leftMid}>
          <CircleImageText
            innerImg={<People style={{ width: "40px" }} />}
            text={text}
            clickHandler={()=>{(props.scrollRef.current[1].current.scrollIntoView())}}
          />
        </span>
        <span className={classes.leftBottom}>
          <CircleImageText
            innerImg={<img src={Google} style={{ width: "40px" }} />}
            text={text}
          clickHandler={()=>{(props.scrollRef.current[2].current.scrollIntoView())}}
          />
        </span>
        <span className={classes.rightTop}>
          <CircleImageText
            innerImg={<img src={LoveBirds} style={{ width: "40px" }} />}
            textRight={true}
            text={text}
          clickHandler={()=>{(props.scrollRef.current[3].current.scrollIntoView())}}
          />
        </span>
        <span className={classes.rightMid}>
          <CircleImageText
            innerImg={<img src={MobileApp} style={{ width: "40px" }} />}
            textRight={true}
            text={text}
          clickHandler={()=>{(props.scrollRef.current[4].current.scrollIntoView())}}
          />
        </span>
        <span className={classes.rightBottom}>
          <CircleImageText
            innerImg={<img src={MobileChat} style={{ width: "40px" }} />}
            textRight={true}
            text={text}
          clickHandler={()=>{(props.scrollRef.current[5].current.scrollIntoView())}}
          />
        </span>
        <LeftLinksPath className={classes.leftPath} />
        <RightLinksPath className={classes.rightPath} />
      </span>
    // </span>
  );
};

export default withRouter(InterActiveSection);