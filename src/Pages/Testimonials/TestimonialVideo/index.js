import React from "react";
import {
  Grid,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Card,
} from "@material-ui/core";
import useStyles from "./style";
import Rating from "@material-ui/lab/Rating";
import VideosData from "../../../Utils/Constants/Language/en/TestimonialVideos";
const VideoCard = ({ Img, detail, avatar, name, date }) => {
  const {
    cardRoot,
    cardImage,
    avatarImg,
    cardTitle,
    cardpara,
    carddate,
    header,
    rating,
  } = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      {VideosData.map((a) => {
        return (
          <Grid
            style={{ display: "flex" }}
            item
            xs={12}
            sm={6}
            md={4}
            key={a.id}
          >
            <Card className={cardRoot}>
              <CardHeader
                style={{ textAlign: "left" }}
                avatar={<img src={a.Avatar} alt="s" className={avatarImg} />}
                title={
                  <Typography variant="h5" className={cardTitle}>
                    {a.name}
                  </Typography>
                }
                action={
                  <Typography variant="body2" className={carddate}>
                    {a.date}
                  </Typography>
                }
                subheader={
                  <Rating
                    name="read-only"
                    value={5}
                    readOnly
                    className={rating}
                  />
                }
                className={header}
              />

              <CardMedia
                component="img"
                alt=""
                height="140"
                className={cardImage}
                image={a.Img}
                title=""
              />

              <CardContent>
                <Typography align="left" color="textPrimary" variant="h4">
                  {a.project}
                </Typography>
                <Typography align="left" color="textSecondary" variant="body1">
                  {a.para}
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
