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
    playBtn,
  } = useStyles();

  return (
    <>
    {VideosData.map((a)=>{
      return(
        <Grid item xs={12} sm={4} md={4} lg={3} className={cardRoot} key={a.id}>
    <Grid>
      <CardHeader
        avatar={<img src={a.Avatar} alt="s" className={avatarImg} />}
        title={<Typography variant="h5"  className={cardTitle}>{a.name}</Typography>}
        action={
          <Typography variant="body2" className={carddate}>
            {a.date}
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
        image={a.Img}
        title="Contemplative Reptile"
      />
      <div className={playBtn}>
        <img src={play} alt="s" />
      </div>
      </Grid>
      <Grid>
      <CardContent>
        <Typography variant="body1"  className={cardpara}>
          {a.para}
        </Typography>
      </CardContent>
      </Grid>
      
    </Grid>
      );
    })};
  </>
    
  );
};
export default VideoCard;
