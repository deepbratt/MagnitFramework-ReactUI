import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import ReviewSlider from "../ReviewSlider";
import Avatar1 from "../../assets/services/Avatar1.webp";
import Avatar2 from "../../assets/services/Avatar2.webp";
import Avatar3 from "../../assets/services/Avatar3.webp";
import Avatar4 from "../../assets/services/Avatar4.webp";
import Avatar5 from "../../assets/services/Avatar5.webp";
import Avatar6 from "../../assets/services/Avatar6.webp";
import Section from "../../Pages/Section";
import { Colors } from "../../Theme/color.constants";
import comma from "../../assets/patterns/comma.png";
import pinkDot from "../../assets/patterns/pinkDot.png";
import smallDot from "../../assets/patterns/smalldot.png";
import yellowDot from "../../assets/patterns/yellowDot.png";
import miniYellow from "../../assets/patterns/miniYellow.png";
import DottedPattern from "../../assets/patterns/circleDot.png";
import yellowComma from "../../assets/patterns/yellowComma.png";
import TopDottedPattern from "../../assets/patterns/topCircle.png";
import StarFishPattern from "../../assets/patterns/starfishBlue.png";
import StarFishPinkPattern from "../../assets/patterns/leftStarfish.png";
import SquareDottedPattern from "../../assets/patterns/dotsPattern.png";
import SectionStyles from "./style";

const CommentSection = ({ children, data }) => {
  const { aliceBlue } = Colors;
  const {
    root,
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
  } = SectionStyles();
  return (
    <Grid item xs={12} className={root}>
      {children}
      <Section backColor={aliceBlue}>
        <div className={reviewSlider}>
          <Avatar alt="" src={Avatar1} className={avatar1} />
          <Avatar alt="" src={Avatar2} className={avatar2} />
          <Avatar alt="" src={Avatar3} className={avatar3} />
          <Avatar alt="" src={Avatar4} className={avatar4} />
          <Avatar alt="" src={Avatar5} className={avatar5} />
          <Avatar alt="" src={Avatar6} className={avatar6} />
          <img className={squareDotsPattern} src={SquareDottedPattern} alt="" />
          <img className={yellowCommaPattern} src={yellowComma} alt="" />
          <img className={commaPattern} src={comma} alt="" />
          <img className={pinkDotPattern} src={pinkDot} alt="" />
          <img className={yellowDotPattern} src={yellowDot} alt="" />
          <img className={miniYellowPattern} src={miniYellow} alt="" />
          <img className={smallDotPattern} src={smallDot} alt="" />
          <img
            className={leftStarFishPattern}
            src={StarFishPinkPattern}
            alt=""
          />
          <img className={rightStarFishPattern} src={StarFishPattern} alt="" />
          <img className={leftDottedPattern} src={DottedPattern} alt="" />
          <img className={rightDottedPattern} src={TopDottedPattern} alt="" />
          <ReviewSlider slides={data} showArrows={false} />
        </div>
      </Section>
    </Grid>
  );
};

CommentSection.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array.isRequired,
  order: PropTypes.number.isRequired,
};

export default CommentSection;
