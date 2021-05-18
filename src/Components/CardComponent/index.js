import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/images/cards/Rectangle 89.png";
import authorImg from "../../assets/images/cards/author1.png";
import { Avatar } from "@material-ui/core";
import CardStyle from "./style";

const CardComponent = ({
  // title,
  // text,
  // authorName,
  // lessons,
  // coverImg,
  // authImg,
  cardData,
}) => {
  const { title, text, authName, lesson, coverImg, authImg } = cardData;
  const { root, content, large, author } = CardStyle();
  return (
    <Card className={root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Card Cover Image"
          height="270"
          image={coverImg}
          title={title}
        />
        <CardContent className={content}>
          <Typography align="left" gutterBottom variant="h3">
            {title}
          </Typography>
          <Typography align="left" variant="body2" component="p" paragraph>
            {text}
          </Typography>
          <div className={author}>
            <div>
              <Avatar alt="Remy Sharp" src={authImg} className={large} />
            </div>
            <div>
              <Typography variant="h6">By {authName}</Typography>
              <Typography variant="body2">{lesson} lessons</Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
