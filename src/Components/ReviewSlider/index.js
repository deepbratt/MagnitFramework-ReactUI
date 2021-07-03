import ReviewSliderStyles from "./style";
// import prev from "../../assets/services/prev.png";
// import next from "../../assets/services/next.png";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
// import CustomImage from "../CustomImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = ({
  slides,
  // showArrows,
  showDots,
  // indicatorsPosition,
  itemsPerSlide,
}) => {
  // const visible = !showDots ? "hidden" : "visible";
  const theme = useTheme();
  const isMDUp = useMediaQuery(theme.breakpoints.up("md"));
  // const indicatorStyles = {
  //   background: "rgba(98, 173, 244, 1)",
  //   width: 16,
  //   height: 16,
  //   borderRadius: 25,
  //   display: "inline-block",
  //   margin: "0px 8px",
  //   visibility: visible,
  // };
  const { sliderRoot } = ReviewSliderStyles();
  // const customDots = (onClickHandler, isSelected, index, label) => {
  //   if (isSelected) {
  //     return (
  //       <li
  //         style={{
  //           ...indicatorStyles,
  //           background: "#151827",
  //           height: 20,
  //           width: 20,
  //         }}
  //         aria-label={`Selected: ${label} ${index + 1}`}
  //         title={`Selected: ${label} ${index + 1}`}
  //       />
  //     );
  //   }

  //   return (
  //     <li
  //       style={indicatorStyles}
  //       onClick={onClickHandler}
  //       onKeyDown={onClickHandler}
  //       value={index}
  //       key={index}
  //       role="button"
  //       tabIndex={0}
  //       title={`${label} ${index + 1}`}
  //       aria-label={`${label} ${index + 1}`}
  //     />
  //   );
  // };

  return (
    <Slider
      dots={showDots}
      infinite={true}
      speed={500}
      slidesToShow={isMDUp ? itemsPerSlide : 1}
      slidesToScroll={1}
      arrows={false}
      className={sliderRoot}
      autoplay
    >
      {slides.map((slide, index) => {
        return (
          <Grid
            container
            justify="center"
            key={index + "slide"}
            style={{
              display: "flex",
              height: "100%",
            }}
          >
            {slide}
          </Grid>
        );
      })}
    </Slider>
  );
};

ReviewSlider.defaultProps = {
  showArrows: true,
  showDots: true,
  itemsPerSlide: 1,
};

export default ReviewSlider;
