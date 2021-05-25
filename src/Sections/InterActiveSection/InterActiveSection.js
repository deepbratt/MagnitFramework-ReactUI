import React from "react";
import { useHistory, withRouter } from "react-router";
import useStyles from "./useStyles";
import { ReactComponent as MiddleImgBtn } from "../../assets/CaseStudies/middle.svg";
import { ReactComponent as LeftLinksPath } from "../../assets/CaseStudies/left_links.svg";
import { ReactComponent as RightLinksPath } from "../../assets/CaseStudies/right_links.svg";
import { ReactComponent as People } from "../../assets/CaseStudies/people.svg";
import { ReactComponent as Touch } from "../../assets/CaseStudies/touch.svg";
import Google from "../../assets/CaseStudies/google.svg";
import MobileChat from "../../assets/CaseStudies/mobile-chat.svg";
import MobileApp from "../../assets/CaseStudies/mobile-app.svg";
import LoveBirds from "../../assets/CaseStudies/love-birds.svg";
import CircleImageText from "../../Components/CircleImageText";
import { caseStudies } from "../../Utils/Constants/Language";

const InterActiveSection = (props) => {
  const classes = useStyles();
  const text = caseStudies.demoText;
  const history = useHistory();
  let dataText = props.textData;
  const iconsArray = [
    { icon: <Touch style={{ width: "40px" }} />, nameClass: classes.leftTop },
    { icon: <People style={{ width: "40px" }} />, nameClass: classes.leftMid },
    {
      icon: <img src={Google} style={{ width: "40px" }} />,
      nameClass: classes.leftBottom,
    },
    {
      icon: <img src={MobileChat} style={{ width: "40px" }} />,
      nameClass: classes.rightTop,
    },
    {
      icon: <img src={MobileApp} style={{ width: "40px" }} />,
      nameClass: classes.rightMid,
    },
    {
      icon: <img src={LoveBirds} style={{ width: "40px" }} />,
      nameClass: classes.rightBottom,
    },
  ];
  return (
    // <span className={classes.root}>
    <span className={classes.wrapper}>
      <MiddleImgBtn
        className={classes.middleImage}
        onClick={() => {
          history.push("/");
        }}
      />

      {dataText.map((item,index)=>(
        <span className={iconsArray[index].nameClass}>
        <CircleImageText
          textRight={index > 2 ? true : false}
          key={"interactive-casestudies-"+index}
          innerImg={iconsArray[index].icon}
          text={item.faqQuestion}
          clickHandler={() => {
            props.scrollRef.current[index].current.scrollIntoView();
          }}
        />
      </span>
      ))}
      <LeftLinksPath className={classes.leftPath} />
      <RightLinksPath className={classes.rightPath} />
    </span>
    // </span>
  );
};

export default withRouter(InterActiveSection);
