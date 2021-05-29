import { CircularProgress, Grid, Typography } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { Animate } from 'react-move'
export const Loader=()=>{
    const [startLoading, handleLoading] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            handleLoading(false)
           }, 1000);});


    return (
           <Animate
        start={()=>({value: startLoading})}
        update={()=>({
value:[startLoading]
        })}
    >
    {({value})=>{
return(
    <Grid container justify="center" style={{ position: "absolute",
      left:"50%",
        top: "50%",
        transform: "translate(0%, -50%)",
        width:"100px",
        }}>
             <CircularProgress value={value}></CircularProgress>
             <Typography variant="h4" color="textPrimary">Loading...</Typography>
        </Grid>
           
        );
    }}
        
        </Animate>
    )
};
