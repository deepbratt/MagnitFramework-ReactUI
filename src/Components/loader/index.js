import { CircularProgress, Grid, Typography } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { Animate } from 'react-move'
import CustomImage from "../CustomImage"
import dot from "../../assets/dot.svg"
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
    <Grid container justify="center" style={{     display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit",
        }}>
           
            <CustomImage
                alt="icon"
                src={dot}
               value={startLoading}
              />
        </Grid>
           
        );
    }}
        
        </Animate>
    )
};
