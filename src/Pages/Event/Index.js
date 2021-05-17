import { Card, Grid,CardContent,Button,Typography} from '@material-ui/core'
import React from 'react'
import EventHead from './EventHead/index';
import people from "../../assets/Event/people.png"
import img from "../../assets/Event/drip.png"
import EventStyles from "./eventStyles"
import Heading from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import Activity from './EventCard/Index';
import activities from '../../Utils/Constants/Language/en/EventActivites'
import { MuiThemeProvider } from "@material-ui/core/styles";
import Breakpoints from "../../Theme/theme.breakpoints";
import {Colors} from "../../Theme/color.constants"
import Section from '../Section';
 const Event = () => {
    const {whiteColor} = Colors
     const {root,cardSec,underlined,paragraph,cardRoot,seeMore,} =EventStyles();
    return (
        <div >
            <Grid xs={12}>
              <EventHead image={people} />
            </Grid>
            <Grid xs={12} className={root}>
            <Card>
            <CardContent className={cardSec}>
              <section className={underlined}>
                <Heading title="Event" />
              </section>
              <section className={paragraph}>
                <Paragraph para="Activities, Celebrations, and more." />
              </section>
            </CardContent>
          </Card>
         
     <Grid xs={12} container justify="center" className={cardRoot} >
           {
               activities.map((a=>{
                   return(
                       <Grid xs={12} md={4} key={a.id}>
                       <Activity  Img={a.Img} title={a.name} detail={a.para} />
                       </Grid>
                   );
               }))
           }
            </Grid>
           
    <Grid xs={12} container alignItems="center" justify="center">
        <Button type="submit" color="primary" variant="contained">
          <Typography
            className={seeMore}
            variant="button"
          >
            See More
          </Typography>
        </Button>
        </Grid>
            </Grid>
        </div>
    )
}
export default Event;