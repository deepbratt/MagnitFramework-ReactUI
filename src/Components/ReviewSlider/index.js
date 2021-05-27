import { Carousel } from "react-responsive-carousel";
import ReviewCard from "./ReviewCard";
import ReviewSliderStyles from "./style";
import prev from "../../assets/services/prev.png";
import next from "../../assets/services/next.png";
import { Grid } from "@material-ui/core";
import { reviewSliderText } from "../../Utils/Constants/Language";
import CustomImage from "../CustomImage";

const slideArr = reviewSliderText.map((a) => {
  return <ReviewCard cardData={a} />;
});

const ReviewSlider = ({ slides, showArrows, showDots, indicatorsPosition }) => {
  const visible = !showDots ? "hidden" : "visible";
  const indicatorStyles = {
    background: "rgba(98, 173, 244, 1)",
    width: 16,
    height: 16,
    borderRadius: 25,
    display: "inline-block",
    margin: "0px 8px",
    visibility: visible,
  };
  const { nextBtn, prevBtn, carouselRoot } = ReviewSliderStyles();
  const customDots = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <li
          style={{
            ...indicatorStyles,
            background: "#151827",
            height: 20,
            width: 20,
          }}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }

    return (
      <li
        style={indicatorStyles}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <Carousel
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={prevBtn}
          >
            <CustomImage
              src={prev}
              alt="prev"
              style={{ width: "19px", height: "16px", marginTop: "0.1rem" }}
            />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={nextBtn}
          >
            <CustomImage
              src={next}
              alt="next"
              style={{ width: "19px", height: "16px", marginTop: "0.1rem" }}
            />
          </button>
        )
      }
      
      showStatus={false}
      interval={5500}
      showArrows={showArrows}
      infiniteLoop={true}
      transitionTime={500}
      renderIndicator={customDots}
      className={indicatorsPosition ? carouselRoot : null}
      showThumbs={false}
    >
      {slides.map((slide, i) => {
        return (
          <Grid
            container
            justify="center"
            key={i}
            elevation={0}
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              backgroundColor: "transparent",
            }}
          >
            {slide}
          </Grid>
        );
      })}
    </Carousel>
  );
};

ReviewSlider.defaultProps = {
  slides: slideArr,
  showArrows: true,
  showDots: true,
};

export default ReviewSlider;
