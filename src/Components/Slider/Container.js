import React from "react";
import { useStyles } from "./sliderStyles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "./Slider";
import { Grid } from "@material-ui/core";
import CustomImage from "../CustomImage";

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
          style={{
            display: "flex",
            flexDirection: "column",
            height: "85vh",
            // backgroundImage: `url(${data.backgroundImage}), linear-gradient(to right, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.25) 100%)`,
            background:`linear-gradient(to right, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0) 100%), url(${data.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          alignItems="center"
        >
          {/* <CustomImage
            src={data.backgroundImage}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          /> */}
          <Slider alt={props.alt} array={data.items} data={data} />
        </Grid>
      ))}
    </Carousel>
  );
};

export default Container;
