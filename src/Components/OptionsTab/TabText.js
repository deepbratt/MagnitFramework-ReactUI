import React from "react";
import { Grid, Typography,Button } from "@material-ui/core";
import vector from "../../assets/services/vector.png";
import OptionTabStyles  from "./style";
import dataText, { FullTimeHiring, HiringOption } from './constant';
export const TabText = () => {
    const { detail,bulletText,textDiv,trialBtn, } = OptionTabStyles();
    return (
       <Grid style={{textAlign:"left"}}>
            <Typography variant="h6"  >{FullTimeHiring}</Typography>
        <Typography className={detail} color="initial">
        {HiringOption}
</Typography>
   
    {dataText.map(a=>{
      return(
        <Grid xs={12} className={textDiv}  key={a.id}>
         <Grid  ><img src={vector} alt={vector} style={{marginRight:".4rem",width:"19px",height:"19px",}}/></Grid>
         <Grid xs={11}>
         <Typography className={bulletText} >{a.text}</Typography></Grid></Grid>);
    })}
   <Button color="primary" variant="contained" className={trialBtn} >
        <Typography>Get a Risk Free Trial
(Start your trial in 24 hours!)</Typography>
    </Button>
        </Grid>
    )
}

