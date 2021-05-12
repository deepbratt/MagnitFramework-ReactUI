import { Grid,Button,Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles";
import Heading from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { Oops, PageNotFound } from './constants';
 const Main = ({ErrorImg}) => {
   const {root,Img,head,paragraph,HomeBtn}= useStyles();
    return (
        
            <Grid xs={12} className={root}>
                 <section className={head}>
                 <img src={ErrorImg} alt="error" className={Img}/>
               </section>
               <section className={head}>
               <Heading title={PageNotFound}/>
               </section>
               <section className={paragraph}>
               <Paragraph para={Oops}/>
               </section>
                <Button type="submit" color="primary" variant="contained">
          <Typography
            className={HomeBtn}
            variant="button"
          >
            Home
          </Typography>
        </Button>
            </Grid>
  
    )
}
export default Main