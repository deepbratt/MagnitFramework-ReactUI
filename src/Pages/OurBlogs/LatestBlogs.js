import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import OurBlogsStyles from "./style";
import CustomButton from "../../Components/CustomButton";
import { NavLink } from "react-router-dom";

const LatestBlogCard = ({ cardData }) => {
  const { coverImage, imageText, title, body, buttonText, detail } = cardData;
  const { authName, date } = detail;
  const {
    latestBlogCard,
    latestBlogCardContent,
    latestBlogDetail,
    coverImg,
    authorName,
    dateStyle,
  } = OurBlogsStyles();
  return (
    <Card className={latestBlogCard}>
      <CardActionArea>
        {/* <CardMedia image={coverImage} title={imageText} /> */}
        <img className={coverImg} src={coverImage} alt={imageText} />
        <CardContent className={latestBlogCardContent}>
          <div className={latestBlogDetail}>
            {/* <div style={{ marginRight: "8px" }}>
              <Typography className={authorName} variant="h6" component="h3">
                {authName}
              </Typography>
              <Typography
                className={authorDesig}
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {authDesig}
              </Typography>
            </div>
            <div className={latestBlogDetailCategory}>
              <Typography variant="h6" component="h3">
                {category}
              </Typography>
            </div> */}
            <div>
              <Typography className={dateStyle} variant="h6" component="h3">
                {date}
              </Typography>
            </div>
          </div>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body[0].substr(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={latestBlogCardContent}>
        <NavLink to="/">
          <CustomButton color="primary">{buttonText}</CustomButton>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default LatestBlogCard;
