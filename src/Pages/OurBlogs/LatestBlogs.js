import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import OurBlogsStyles from "./style";
import CustomButton from "../../Components/CustomButton";
import { NavLink } from "react-router-dom";

const LatestBlogCard = ({ cardData }) => {
  const { title, text, date, banner, buttonLabel, link, descriptionLong, image, canonical } = cardData;


  const {
    latestBlogCard,
    latestBlogCardContent,
    latestBlogDetail,
    coverImg,
    dateStyle,
  } = OurBlogsStyles();

  return (
    <Card className={latestBlogCard}>
      <CardActionArea>
        <img className={coverImg} src={banner || image} alt="Blog cover" />
        <CardContent className={latestBlogCardContent}>
          <div className={latestBlogDetail}>
            <div>
              <Typography className={dateStyle} variant="h6" component="h3">
                {new Date(date).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"})}
              </Typography>
            </div>
          </div>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          {(text || descriptionLong) && (
            <Typography variant="body2" gutterBottom component="p">
              {text ? text.substr(0,70) : descriptionLong.substr(0, 70)}...
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions className={latestBlogCardContent}>
        <NavLink to={link || "blog/"+canonical}>
          <CustomButton>{"Read More"}</CustomButton>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default LatestBlogCard;
