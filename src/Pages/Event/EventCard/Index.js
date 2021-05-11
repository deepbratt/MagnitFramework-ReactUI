import React from 'react'
import { Card, Grid,CardContent,CardMedia,CardActionArea,CardActions ,Typography} from '@material-ui/core'
import ActivityStyles from "./style"

const Activity=({Img,title,detail})=>{
    const {cardRoot,cardImage,cardTitle,cardpara} =ActivityStyles();
  
  return(
  <Card className={cardRoot} >
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="140"
      className={cardImage}
      image={Img}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom  component="h2" className={cardTitle}>
     {title}
      </Typography>
      <Typography  component="p" className={cardpara}>
{detail}
      </Typography>
    </CardContent>
</Card>
  )     
}
export default Activity;