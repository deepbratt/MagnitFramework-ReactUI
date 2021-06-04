import { CircularProgress, Grid, Typography } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { Animate } from 'react-move'
import CustomImage from "../CustomImage"
import loader from "../../assets/loader.svg"
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
        
            <CustomImage
                alt="icon"
                src={loader}
               value={startLoading}
              />
             
        </Grid>
           
        );
    }}
        
        </Animate>
    )
};
