import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import CustomButton from "../../Components/CustomButton";
import OurBlogsStyles from "./style";

const TrendingBlogs = ({ featureImage, cardData }) => {
  const { title, body, buttonText } = cardData;
  const { content } = OurBlogsStyles();
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <img width="100%" src={featureImage} alt="" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardContent className={content}>
            {/* <div className={detail}>
              <div>
                <Avatar className={avatar}/>
              </div>
              <div>
                <Typography variant="h6">By {authName}</Typography>
                <Rating name="read-only" value={4} readOnly />
              </div>
            </div> */}
            <Typography variant="h4">{title}</Typography>
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
            <CustomButton text={buttonText} />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TrendingBlogs;
