import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Avatar } from "@material-ui/core";
import StartQuote from "../../assets/images/cards/startQuote.png";
import EndQuote from "../../assets/images/cards/EndingQuote.png";
import CardStyle from "./style";
import {col2} from "../../Pages/Home/mobileViewData"
const SecondColumn = ({ cardData }) => {
  const { col2text, col2authName, col2authImg } = col2;
  const { root, author, content, startQuote, large, endQuote } = CardStyle();
  return (
    <Card className={root}>
      <div className={author}>
        <div>
          <Avatar alt="Remy Sharp" src={col2authImg} className={large} />
        </div>
        <div>
          <Typography variant="h5">By {col2authName}</Typography>
          <Rating name="read-only" value={4} readOnly />
        </div>
      </div>

      <CardActionArea>
        <CardContent className={content}>
          <img className={startQuote} src={StartQuote} alt="Start Quote Icon" />
          <img className={startQuote} src={StartQuote} alt="Start Quote Icon" />
          <Typography align="left" variant="body2" component="p" paragraph>
            {col2text}
          </Typography>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img className={endQuote} src={EndQuote} alt="End Quote Icon" />
          <img className={endQuote} src={EndQuote} alt="End Quote Icon" />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default SecondColumn;
