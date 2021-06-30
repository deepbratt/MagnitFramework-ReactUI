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
import VideosData from "../../../Utils/Constants/Language/en/TestimonialVideos";

const VideoCard = ({ Img, detail, avatar, name, date }) => {
  const {
    cardRoot,
    cardImage,

    cardTitle,

    rating,
    blogDetail,
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
            key={a.id+"videodata"}
          >
            <Card className={cardRoot}>
              {/* <CardHeader
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
              /> */}
              <div className={blogDetail}>
                <div className="left">
                  <div>
                    <Avatar src={a.Avatar} />
                  </div>
                  <div>
                    <Typography variant="h5" className={cardTitle}>
                      {a.name}
                    </Typography>
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      className={rating}
                    />
                  </div>
                </div>
                <div>
                  <Typography align="right" variant="body2" component="p">
                    {a.date}
                  </Typography>
                </div>
              </div>
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
