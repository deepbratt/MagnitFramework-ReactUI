import { CircularProgress, Grid, Typography } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { Animate } from 'react-move'

export const Loader=({color,styles})=>{
    const [startLoading, handleLoading] = useState(0);

    useEffect(() => {
            handleLoading(false)
    })
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
        transform: "translate(0%, -44%)",
        width:"100px",
        }}>
             <CircularProgress value={value} style={{color:{color}}}></CircularProgress>
             <Typography variant={styles} color="textPrimary">Loading...</Typography>
        </Grid>
           
        );
    }}
        
        </Animate>
    )
};
