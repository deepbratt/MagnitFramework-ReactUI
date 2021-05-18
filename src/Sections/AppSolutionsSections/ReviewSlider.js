import React from "react";
import ReviewSlider from "../../Components/ReviewSlider/index";
import { Avatar } from "@material-ui/core";
import ServicesSectionStyles from "../../Pages/Services/style";
import Section from "../../Pages/Section";
import { Colors } from "../../Theme/color.constants";
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import StarFishPinkPattern from "../../assets/patterns/leftStarfish.png";
import DottedPattern from "../../assets/patterns/circleDot.png";
import TopDottedPattern from "../../assets/patterns/topCircle.png";
import yellowComma from "../../assets/patterns/yellowComma.png";
import comma from "../../assets/patterns/comma.png";
import miniYellow from "../../assets/patterns/miniYellow.png";
import pinkDot from "../../assets/patterns/pinkDot.png";
import yellowDot from "../../assets/patterns/yellowDot.png";
import smallDot from "../../assets/patterns/smalldot.png";
import SquareDottedPattern from "../../assets/patterns/dotsPattern.png";
import Avatar1 from "../../assets/services/Avatar1.png";
import Avatar2 from "../../assets/services/Avatar2.png";
import Avatar3 from "../../assets/services/Avatar3.png";
import Avatar4 from "../../assets/services/Avatar4.png";
import Avatar5 from "../../assets/services/Avatar5.png";
import Avatar6 from "../../assets/services/Avatar6.png";

const Slider = () => {
  const { aliceBlue } = Colors;
  const {
    reviewSlider,
    leftStarFishPattern,
    pinkDotPattern,
    yellowDotPattern,
    miniYellowPattern,
    smallDotPattern,
    rightStarFishPattern,
    leftDottedPattern,
    rightDottedPattern,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    squareDotsPattern,
    commaPattern,
    yellowCommaPattern,
  } = ServicesSectionStyles();
  return (
    <>
      <Section backColor={aliceBlue}>
        <div className={reviewSlider}>
          <Avatar alt="" src={Avatar1} className={avatar1} />
          <Avatar alt="" src={Avatar2} className={avatar2} />
          <Avatar alt="" src={Avatar3} className={avatar3} />
          <Avatar alt="" src={Avatar4} className={avatar4} />
          <Avatar alt="" src={Avatar5} className={avatar5} />
          <Avatar alt="" src={Avatar6} className={avatar6} />
          <img
            className={squareDotsPattern}
            src={SquareDottedPattern}
            alt=""
            srcset=""
          />
          <img
            className={yellowCommaPattern}
            src={yellowComma}
            alt=""
            srcset=""
          />
          <img className={commaPattern} src={comma} alt="" srcset="" />
          <img className={pinkDotPattern} src={pinkDot} alt="" srcset="" />
          <img className={yellowDotPattern} src={yellowDot} alt="" srcset="" />
          <img
            className={miniYellowPattern}
            src={miniYellow}
            alt=""
            srcset=""
          />
          <img className={smallDotPattern} src={smallDot} alt="" srcset="" />
          <img
            className={leftStarFishPattern}
            src={StarFishPinkPattern}
            alt=""
            srcset=""
          />
          <img
            className={rightStarFishPattern}
            src={StarFishPattern}
            alt=""
            srcset=""
          />
          <img
            className={leftDottedPattern}
            src={DottedPattern}
            alt=""
            srcset=""
          />
          <img
            className={rightDottedPattern}
            src={TopDottedPattern}
            alt=""
            srcset=""
          />
          <ReviewSlider />
        </div>
      </Section>
    </>
  );
};

export default Slider;
