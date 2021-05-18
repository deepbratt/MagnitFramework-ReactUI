import React from "react";
import { FoundersyStyles } from "./foundersyStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Container = ( {slides}) => {
  const classes = FoundersyStyles();
  const { slide } = classes
  return (
    <Carousel
      className={slide}
      autoPlay
      showStatus={false}
      interval={2500}
      showArrows={false}
      infiniteLoop={true}
      transitionTime={500}
      showIndicators={false}
    >
      {slides.map((slide, i) => {
        return <section key={i}>{slide}</section>;
      })}
    </Carousel>
  );
};

export default Container;
