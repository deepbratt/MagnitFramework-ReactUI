import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Avatar } from "@material-ui/core";
import StartQuote from "../../assets/images/cards/startQuote.png";
import EndQuote from "../../assets/images/cards/EndingQuote.png";
import CardStyle from "./style";
import CustomImage from "../CustomImage";

const QuoteCard = ({ cardData,shadow }) => {
  const { review, clientName, clientImage,rating, projectName } = cardData;
  const { root, author, content, startQuote, large, endQuote } = CardStyle();
  return (
    <Card className={root} style={{boxShadow:{shadow}}}>
      <div className={author}>
        <div>
          <Avatar alt="Remy Sharp" src={clientImage} className={large} />
        </div>
        <div>
          <Typography variant="h5">By {clientName}, {projectName}</Typography>
          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>

      <CardActionArea>
        <CardContent className={content}>
          <CustomImage className={startQuote} src={StartQuote} alt="Start Quote Icon" />
          <CustomImage className={startQuote} src={StartQuote} alt="Start Quote Icon" />
          <Typography align="left" variant="body2" component="p" paragraph>
            {review}
          </Typography>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomImage className={endQuote} src={EndQuote} alt="End Quote Icon" />
          <CustomImage className={endQuote} src={EndQuote} alt="End Quote Icon" />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default QuoteCard;
