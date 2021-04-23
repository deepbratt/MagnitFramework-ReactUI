import React from "react";
import { useStyles } from "./sliderStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "./Slider";

let slideArr = [<Slider />, <Slider />];
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
    >
      {slides.map((slide, index) => {
        return <section>{slide}</section>;
      })}
    </Carousel>
  );
};

Container.defaultProps = {
  slides: slideArr,
};
export default Container;
