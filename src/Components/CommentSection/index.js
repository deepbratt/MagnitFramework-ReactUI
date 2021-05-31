
import Section from "../../Pages/Section";
import { Avatar, } from "@material-ui/core";
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
import ReviewSlider from "../ReviewSlider";
import SectionStyles from "./style";
import {Grid } from "@material-ui/core";
import Avatar1 from "../../assets/services/Avatar1.png";
import Avatar2 from "../../assets/services/Avatar2.png";
import Avatar3 from "../../assets/services/Avatar3.png";
import Avatar4 from "../../assets/services/Avatar4.png";
import Avatar5 from "../../assets/services/Avatar5.png";
import Avatar6 from "../../assets/services/Avatar6.png";

const CommentSection = ({children}) => {
  const { aliceBlue } = Colors;
  const {
    root,
    // background,
    
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
    yellowCommaPattern
  } = SectionStyles();
  return (
    <Grid item xs={12} className={root}  >
    {children}
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
            srcSet=""
          />
            <img
            className={yellowCommaPattern}
            src={yellowComma}
            alt=""
            srcSet=""
          />
              <img
            className={commaPattern}
            src={comma}
            alt=""
            srcSet=""
          />
          <img
            className={pinkDotPattern}
            src={pinkDot}
            alt=""
            srcSet=""
          />
           <img
            className={yellowDotPattern}
            src={yellowDot}
            alt=""
            srcSet=""
          />
          <img
            className={miniYellowPattern}
            src={miniYellow}
            alt=""
            srcSet=""
          /> 
          <img
            className={smallDotPattern}
            src={smallDot}
            alt=""
            srcSet=""
          /> 
          <img
            className={leftStarFishPattern}
            src={StarFishPinkPattern}
            alt=""
            srcSet=""
          />
          <img
            className={rightStarFishPattern}
            src={StarFishPattern}
            alt=""
            srcSet=""
          />
          <img
            className={leftDottedPattern}
            src={DottedPattern}
            alt=""
            srcSet=""
          />
          <img
            className={rightDottedPattern}
            src={TopDottedPattern}
            alt=""
            srcSet=""
          />
          <ReviewSlider />
        </div>
      </Section>
    </Grid>
  );
};

export default CommentSection;
