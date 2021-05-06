import { Carousel } from "react-responsive-carousel";
import CardImage1 from "../../assets/images/cards/Rectangle 89.png";
import AuthImage1 from "../../assets/services/Person1.png";
import ReviewCard from "./ReviewCard";
import ReviewSliderStyles from "./style";
import prev from "../../assets/services/prev.png";
import next from "../../assets/services/next.png";
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
  const indicatorStyles={
   background: "rgba(98, 173, 244, 1)",
    width:16,
    height:16,
    borderRadius:25,
    display:"inline-block",
    margin:"0 8px",
  };
  const { nextBtn,prevBtn,} = ReviewSliderStyles();
  const customDots=(onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
    <li
      style={{ ...indicatorStyles, background: '#151827', height:20, width:20 }}
      aria-label={ `Selected: ${label} ${index + 1}`} 
      title={`Selected: ${label} ${index + 1}`} 
      />
     
      );
}
    return(
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
    
    }
    
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
               <img src={prev} alt="prev" style={{  width: "19px" ,
    height: "16px",
    marginTop: "0.1rem"}} />
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
               <img src={next} alt="next"  style={{  width: "19px" ,
    height: "16px",
    marginTop: "0.1rem"}}  />
              </button>
            )
          }
      
      autoPlay
      showStatus={false}
      interval={2500}
      showArrows={true}
      infiniteLoop={true}
      transitionTime={500}
      renderIndicator={customDots}
     
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
