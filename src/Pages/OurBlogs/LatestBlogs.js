import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OurBlogsStyles from "./style";
import CustomButton from "../../Components/CustomButton";

const LatestBlogCard = ({ cardData }) => {
  const { coverImage, imageText, title, body, buttonText, detail } = cardData;
  const { authName, authDesig, category, date } = detail;
  const {
    latestBlogCard,
    latestBlogCardContent,
    latestBlogDetailCategory,
    latestBlogDetail,
    coverImg,
    authorName,
    authorDesig,
    dateStyle,
  } = OurBlogsStyles();
  return (
    <Card className={latestBlogCard}>
      <CardActionArea>
        {/* <CardMedia image={coverImage} title={imageText} /> */}
        <img className={coverImg} src={coverImage} alt="" />
        <CardContent className={latestBlogCardContent}>
          <div className={latestBlogDetail}>
            <div style={{ marginRight: "10px" }}>
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
            </div>
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
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={latestBlogCardContent}>
      <CustomButton size="small" color="primary">
          {buttonText}
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default LatestBlogCard;
