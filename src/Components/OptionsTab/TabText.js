
import React from 'react'
import { Button, Grid,Typography } from "@material-ui/core";
import vector from "../../assets/services/vector.png";
import OptionTabStyles from "./style";
export const TabText = () => {
    const { detail,bulletText,textDiv } = OptionTabStyles();
    const dataText = [
        {id:1,
        text:"The developer works for total 160 hours in a month (20 days a month and 8 hours per day"},
        {id:2,
          text:"Online time sheet is maintained and shared with you"},
          {id:3,
            text:"Developer communicates through your preferred communication channel (Email/Skype/WhatsApp/TeamViewer)"},
            {id:4,
              text:"Monthly Billing"},
              {id:5,
                text:"Anytime contract cancellation"},
                
      ];
    return (
       <Grid style={{textAlign:"left"}}>
            <Typography variant="h6" color="initial">Full Time Hiring</Typography>
        <Typography className={detail} color="initial">
        Under this hiring option, the Web Developer will become a part of your team on a full-time basis. He/She will be working as a virtual employee for you from the development center in India. The developer will be exclusively working for you. Here is how it works:</Typography>
   
    {dataText.map(a=>{
      return(
        <Grid xs={12} className={textDiv}  key={a.id}>
         <Grid  ><img src={vector} alt={vector} style={{marginRight:".4rem",width:"19px",height:"19px"}}/></Grid>
         <Grid xs={11}>
         <Typography className={bulletText} >{a.text}</Typography></Grid></Grid>);
    })}
    <Button varient="button" style={{background: "#2CD400",margin:".8rem 0rem .1rem 0rem", }}>
        <Typography >Get a Risk Free Trial
(Start your trial in 24 hours!)</Typography>
    </Button>
       </Grid>
    )
}
