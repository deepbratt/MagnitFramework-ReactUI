import { Carousel } from "react-responsive-carousel";
// import CardImage1 from "../../assets/images/cards/Rectangle 89.png";
// import AuthImage1 from "../../assets/services/Person1.png";
import ReviewCard from "./ReviewCard";
import ReviewSliderStyles from "./style";
import prev from "../../assets/services/prev.png";
import next from "../../assets/services/next.png";
import Avatar7 from "../../assets/services/Avatar7.png";
import { Paper } from "@material-ui/core";
import { reviewSliderText } from "../../Utils/Constants/Language";
const { title, text, author } = reviewSliderText;
const card = {
  title: title,
  text: text,
  authName: author,
  authImg: Avatar7,
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
      showThumbs={false}
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
              backgroundColor: "transparent",
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
