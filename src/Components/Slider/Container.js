import React from "react";
import { useStyles } from "./sliderStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "./Slider";
import { Colors } from "../../Theme/color.constants";
import { Data, array } from "../../Utils/Constants/Language/en/SliderText";
const { mainSlide, PalePrim, Chablis } = Colors;
const { headingLineOne, headingLineTwo, headingLineLast, buttonText } = Data;
const slideArr = [
  <Slider
    headingOne={headingLineOne}
    headingTwo={headingLineTwo}
    headingThree={headingLineLast}
    text={buttonText}
    data={array}
    color={mainSlide}
  />,
  <Slider
    headingOne={headingLineOne}
    headingTwo={headingLineTwo}
    headingThree={headingLineLast}
    text={buttonText}
    data={array}
    color={PalePrim}
  />,
  <Slider
    headingOne={headingLineOne}
    headingTwo={headingLineTwo}
    headingThree={headingLineLast}
    text={buttonText}
    data={array}
    color={Chablis}
  />,
];
const Container = ({ slides }) => {
  const classes = useStyles();

  const { slide } = classes;

  return (
    <Carousel
      className={slide}
      autoPlay
      showStatus={false}
      interval={2500}
      showArrows={false}
      infiniteLoop={true}
      transitionTime={500}
      showThumbs={false}
    >
      {slides.map((slide, i) => {
        return <section key={`slide-${i}`}>{slide}</section>;
      })}
    </Carousel>
  );
};

Container.defaultProps = {
  slides: slideArr,
};
export default Container;
