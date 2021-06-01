import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Avatar, Grid } from "@material-ui/core";
import ReviewSliderStyles from "./style";

const ReviewCard = ({ cardData }) => {
  const { text, authName, authImg } = cardData;
  const { grid, root, avatar, content, large } = ReviewSliderStyles();
  return (
    <Grid
      className={grid}
      container
      xs={12}
      justify="center"
      alignContent="center"
    >
      <Grid item sm={12} lg={6}>
        <div className={avatar}>
          <div>
            <Avatar alt="Remy Sharp" src={authImg} className={large} />
          </div>
        </div>
        <Card className={root}>
          <div>
            <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
              {authName}
            </Typography>
            <Rating name="read-only" size="small" value={5} readOnly />
          </div>

          <CardContent className={content}>
            <Typography
              align="center"
              variant="body1"
              style={{ fontWeight: "400" }}
              paragraph
            >
              {text}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ReviewCard;
