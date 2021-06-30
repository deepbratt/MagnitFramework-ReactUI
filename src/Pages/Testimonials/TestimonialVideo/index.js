import React from "react";
import {
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Avatar,
} from "@material-ui/core";
import useStyles from "./style";
import Rating from "@material-ui/lab/Rating";

const VideoCard = ({ data }) => {
  const {
    cardRoot,
    cardImage,

    cardTitle,

    rating,
    blogDetail,
  } = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      {data.map((review, index) => {
        return (
          <Grid
            style={{ display: "flex" }}
            item
            xs={12}
            sm={6}
            md={4}
            key={index + "review"}
          >
            <Card className={cardRoot}>
              <div className={blogDetail}>
                <div className="left">
                  <div>
                    <Avatar src={review.clientImage} />
                  </div>
                  <div>
                    <Typography variant="h5" className={cardTitle}>
                      {review.clientName}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={review.rating}
                      readOnly
                      className={rating}
                    />
                  </div>
                </div>
                <div>
                  <Typography align="right" variant="body2" component="p">
                    {review.Date}
                  </Typography>
                </div>
              </div>
              <CardMedia
                component="img"
                alt=""
                height="140"
                className={cardImage}
                image={review.image}
                title=""
              />

              <CardContent>
                <Typography align="left" color="textPrimary" variant="h4">
                  {review.projectName}
                </Typography>
                <Typography align="left" color="textSecondary" variant="body1">
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default VideoCard;
