import { Carousel } from "react-responsive-carousel";
import ReviewCard from "./ReviewCard";
import Avatar7 from "../../assets/services/Avatar7.png";
import { Paper } from "@material-ui/core";

const card = {
  title: "Web Design",
  text: `This is the third project I have done with it the company, with many more to come in the and years ahead. Thank you for all you did.” \n
   This is the third project I have done with it the company, with many more to come in the and years ahead. Thank you for all you did.”`,
  authName: "Aaron Doe",
  authImg: Avatar7,
};

const slideArr = [
  <ReviewCard cardData={card} />,
  <ReviewCard cardData={card} />,
  <ReviewCard cardData={card} />,
];

const ReviewSlider = ({ slides }) => {
  return (
    <Carousel
      autoPlay
      showStatus={false}
      interval={200500}
      showArrows={false}
      infiniteLoop={true}
      transitionTime={500}
    >
      {slides.map((slide, i) => {
        return (
          <Paper
            key={i}
            elevation={0}
            style={{
              margin: 0,
              padding: 0,
              marginTop: "50px",
              display: "flex",
              backgroundColor: "transparent"
            }}
          >
            {slide}
          </Paper>
        );
      })}
    </Carousel>
  );
};

ReviewSlider.defaultProps = {
  slides: slideArr,
};

export default ReviewSlider;
