import React from "react";
import { useStyles } from "./sliderStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "./Slider";
import { Grid } from "@material-ui/core";

const Container = (props) => {
  const classes = useStyles();
  const { slide } = classes;
  const show = props.indicator;
  // const slides = props.slides;
  const data = props.data.homeSlider.dataArray;
 
  return (
    <Carousel
      className={slide}
      autoPlay
      showStatus={false}
      interval={2500}
      showArrows={false}
      infiniteLoop={true}
      transitionTime={500}
      showIndicators={show}
      showThumbs={false}
    >

      {data.map((data, index) => (
        <Grid
          key={index}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          alignItems="center"
        >
          <Slider alt={props.alt} array={data.items} data={data} />
        </Grid>
      ))}
    </Carousel>
  );
};

export default Container;
