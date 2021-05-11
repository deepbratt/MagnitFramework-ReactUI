import { Grid,Button,Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles";
import Heading from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
 const Main = ({ErrorImg}) => {
   const {root,Img,head,paragraph,HomeBtn}= useStyles();
    return (
        
            <Grid xs={12} className={root}>
                 <section className={head}>
                 <img src={ErrorImg} alt="error" className={Img}/>
               </section>
               <section className={head}>
               <Heading title="OOPS!PAGE NOT FOUND"/>
               </section>
               <section className={paragraph}>
               <Paragraph para="oops! the page you are looking for does not exist. It might have been moved or deleted.  "/>
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