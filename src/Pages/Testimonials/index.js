import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Banner from '../../Components/Banner'
import { Colors } from "../../Theme/color.constants";
import useStyles from './styles'
import banner from "../../assets/Testimonials/banner.png"
import Heading from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import CommentSection from '../../Components/CommentSection';
import VideoCard from './TestimonialVideo';
import linked from "../../assets/Testimonials/linked.png"
import prof from "../../assets/Testimonials/prof.png"
import VideosData,{ ClientsHaveToSay, subTitle, Testmonial } from '../../Utils/Constants/Language/en/TestimonialVideos';

import Section from '../Section';
function Testimonials() {
    const { skyBlue, aliceBlue ,linearBackground} = Colors;
    const {
      root,
    imageWrapper,
     content,
     cardSec,underlined,paragraph,flex,seeMore,cardRoot
    } = useStyles();
    return (
        <CommentSection>
        <Grid className={root} container >
        <Grid item sm={12} md={6}>
          <div className={content}>  
           <Typography variant="h1" gutterBottom>
        {Testmonial}
        </Typography>
        <Typography variant="h6" gutterBottom>
       {subTitle}
        </Typography>
    </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className={imageWrapper}>
            <img src={banner} alt="" />
          </div>
        </Grid>
      </Grid>
      <Grid xs={12}>
      <Card>
            <CardContent className={cardSec}>
              <section className={underlined}>
                <Heading title={Testmonial} />
              </section>
              <section className={paragraph}>
                <Paragraph para={ClientsHaveToSay} />
              </section>
            </CardContent>
          </Card>
      </Grid>
      <Grid xs={12} container direction="row" justify="center"  className={cardRoot}>
      {VideosData.map((a)=>{
          return(
        <Grid xs={12} sm={6} md={4} key={a.id}>
        <VideoCard Img={a.Img} avatar={a.Avatar} name={a.name} detail={a.para} date={a.date}/>
        </Grid>
        );  })}
      </Grid>
      
      <Grid xs={12} container alignItems="center" justify="center" className={flex}>
        <Button type="submit" color="primary" variant="contained">
          <Typography
            className={seeMore}
            variant="button"
          >
            See More
          </Typography>
        </Button>
        </Grid>
      </CommentSection>
    )
}

export default Testimonials
