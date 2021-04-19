import React from "react";
import { useStyles } from "./sliderStyles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Autoplay from "./Autoplay";

const Container = () => {
  const classes = useStyles();
  const { x, slideArr, setX } = Autoplay();
  const { slider, slide, rightBtn, leftBtn } = classes;

  <Autoplay />;

  return (
    <div className={slider}>
      {slideArr.map((text, index) => {
        return (
          <section className={slide} style={{ transform: `translateX(${x}%)` }}>
            {text}
          </section>
        );
      })}
      <ArrowForwardIosIcon
        onClick={() =>
          x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100)
        }
        className={rightBtn}
      >
        Right
      </ArrowForwardIosIcon>
      <ArrowBackIosIcon
        onClick={() =>
          x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100)
        }
        className={leftBtn}
      >
        Right
      </ArrowBackIosIcon>
    </div>
  );
};

export default Container;
