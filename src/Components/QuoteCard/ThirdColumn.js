import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Avatar } from "@material-ui/core";
import StartQuote from "../../assets/images/cards/startQuote.png";
import EndQuote from "../../assets/images/cards/EndingQuote.png";
import CardStyle from "./style";
import {col3} from "../../Pages/Home/mobileViewData"

const ThirdColumn = ({ cardData }) => {
  const { col3text, col3authName, col3authImg } = col3;
  const { root, author, content, startQuote, large, endQuote } = CardStyle();
  return (
    <Card className={root}>
      <div className={author}>
        <div>
          <Avatar alt="Remy Sharp" src={col3authImg} className={large} />
        </div>
        <div>
          <Typography variant="h5">By {col3authName}</Typography>
          <Rating name="read-only" value={4} readOnly />
        </div>
      </div>

      <CardActionArea>
        <CardContent className={content}>
          <img className={startQuote} src={StartQuote} alt="Start Quote Icon" />
          <img className={startQuote} src={StartQuote} alt="Start Quote Icon" />
          <Typography align="left" variant="body2" component="p" paragraph>
            {col3text}
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

export default ThirdColumn;
