import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  CardHeader,
} from "@material-ui/core";
import useStyles from "./style";
import Rating from "@material-ui/lab/Rating";
import play from "../../../assets/Testimonials/play.png";
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
    playBtn,
  } = useStyles();

  return (
    <Grid  className={cardRoot}>
    <Grid>
      <CardHeader
        avatar={<img src={avatar} alt="s" className={avatarImg} />}
        title={<Typography className={cardTitle}>{name}</Typography>}
        action={
          <Typography component="p" className={carddate}>
            {date}
          </Typography>
        }
        subheader={
          <Rating name="read-only" value={4} readOnly className={rating} />
        }
        className={header}
      />
      </Grid>
      <Grid style={{position:"relative"}}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        className={cardImage}
        image={Img}
        title="Contemplative Reptile"
      />
      <div className={playBtn}>
        <img src={play} alt="s" />
      </div>
      </Grid>
      <Grid>
      <CardContent>
        <Typography component="p" className={cardpara}>
          {detail}
        </Typography>
      </CardContent>
      </Grid>
      
    </Grid>
  );
};
export default VideoCard;
