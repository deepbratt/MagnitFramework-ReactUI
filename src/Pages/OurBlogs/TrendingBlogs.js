import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import OurBlogsStyles from "./style";

const TrendingBlogs = ({ featureImage, cardData }) => {
  const { detail, title, body, buttonText } = cardData;
  const { avatar, authName, authDesig, category, date } = detail;
  const { coverImage, content, blogDetail, light } = OurBlogsStyles();
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <CustomImage className={coverImage} src={featureImage} alt="" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardContent className={content}>
            <div className={blogDetail}>
              {/* <div className="left">
                <div>
                  <Avatar src={avatar} />
                </div>
                <div>
                  <Typography variant="h6">{authName}</Typography>
                  <Typography
                    className={light}
                    variant="body2"
                    component="p"
                  >
                    {authDesig}
                  </Typography>
                </div>
              </div>  */}
              <div>
                {/* <Typography align="right" variant="h6" component="p">
                  {category}
                </Typography> */}
                <Typography
                  className={light}
                  align="right"
                  variant="body2"
                  component="p"
                >
                  {date}
                </Typography>
              </div>
            </div>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            {body &&
              body.map((para, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  gutterBottom
                  component="p"
                >
                  {para}
                </Typography>
              ))}
          </CardContent>
          <CardActions>
            <CustomButton>{buttonText}</CustomButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TrendingBlogs;
