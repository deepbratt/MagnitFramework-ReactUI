import React from "react";
import {
  Grid,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@material-ui/core";
import useStyles from "./style";
import Rating from "@material-ui/lab/Rating";
import play from "../../../assets/Testimonials/play.png";
import VideosData from "../../../Utils/Constants/Language/en/TestimonialVideos";
import QuoteCard from "../../../Components/QuoteCard";
import { cards } from "../../Home/cardData";
const VideoCard = ({ Img, detail, avatar, name, date }) => {
  const {
  } = useStyles();

  return (
    <>

        {cards &&
          cards.map((data, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex" }}
            >
              <QuoteCard cardData={data} />
            </Grid>
          ))}
    
    </>,
    <>
        {cards &&
          cards.map((data, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex" }}
            >
              <QuoteCard cardData={data} />
            </Grid>
          ))}
     
    </>,
    <>
     
        {cards &&
          cards.map((data, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex" }}
            >
              <QuoteCard cardData={data} />
            </Grid>
          ))}
   
      
    {/* {VideosData.map((a)=>{
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
          <Rating name="read-only" value={5} readOnly className={rating} />
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
    })}; */}
  </>
    
  );
};
export default VideoCard;
