import { Carousel } from "react-responsive-carousel";
import CardImage1 from "../../assets/images/cards/Rectangle 89.png";
import AuthImage1 from "../../assets/images/cards/author1.png";
import ReviewCard from "./ReviewCard";


const card = {
  title: "Web Design",
  text: `This is the third project I have done with it the company, with many more to come in the and years ahead. Thank you for all you did.” \n This is the third project I have done with it the company, with many more to come in the and years ahead. Thank you for all you did.”`,
  authName: "Charls dolo",
  lesson: "13",
  coverImg: CardImage1,
  authImg: AuthImage1,
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
      interval={2500}
      showArrows={false}
      infiniteLoop={true}
      transitionTime={500}
    >
      {slides.map((slide, i) => {
        return (
          <div key={i} elevation={0}>
            {slide}
          </div>
        );
      })}
    </Carousel>
  );
};

ReviewSlider.defaultProps = {
  slides: slideArr,
};

export default ReviewSlider;
