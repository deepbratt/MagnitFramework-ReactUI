import React from "react";
import { useStyles } from "./sliderStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper} from "@material-ui/core";
import Slider from "./Slider";

const Container = () => {
  const classes = useStyles();
  const { slide,root } = classes;
  const colors = ["#F3FDFE","#fdfdc4","#fff0f0"]
  let slideArr = [<Slider />, <Slider />,<Slider />];

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
      {slideArr.map((text, i) => {
        return   <Paper style={{backgroundColor: colors[i]}} key={i} className={root} elevation= {0} >
          {text}</Paper>
      })}
    </Carousel>
  );
};

export default Container;
