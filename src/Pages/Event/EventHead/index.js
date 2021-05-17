import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import EventHeadStyles from "./styles";

import { Card, CardContent, Paper } from "@material-ui/core";

const EventHead = ({ backColor, image, children, backgroundPattern }) => {
 
  const { root, hero,} = EventHeadStyles();
  return (
    <>
      <Grid className={root} container >
        <Grid item xs={12} md={12}>
       
          <section >
                <img className={hero} alt="hero" src={image} />
              </section>
         
        </Grid>
      </Grid>
    </>
  );
};

export default EventHead;
