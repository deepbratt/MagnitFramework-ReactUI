import React from "react";
import { useStyles } from "./sliderStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "./Slider";

const Container = () => {
  const classes = useStyles();
  const { slide } = classes;
  let slideArr = [<Slider />, <Slider />];

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
      {slideArr.map((text, index) => {
        return <section>{text}</section>;
      })}
    </Carousel>
  );
};

export default Container;
