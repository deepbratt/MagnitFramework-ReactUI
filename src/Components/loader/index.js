import { CircularProgress, Grid, Typography } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { Animate } from 'react-move'
import CustomImage from "../CustomImage"
import Mag from "../../assets/Mag.svg"
import Bounce from 'react-reveal/Bounce';

export const Loader=({color,styles})=>{
    const [startLoading, handleLoading] = useState(0);

    useEffect(() => {
            handleLoading(false)
    },[startLoading])
    return (
           <Animate
        start={()=>({value: startLoading})}
        update={()=>({
value:[startLoading]
        })}
    >
    {({value})=>{
return(
    <Grid container justify="center" style={{     display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit",
   
        }}>
        <Bounce duration={3000}>

            <CustomImage
          
            width="250px"
                alt="icon"
                src={Mag}
              />
             </Bounce>

        </Grid>
           
        );
    }}
        
        </Animate>
    )
};
