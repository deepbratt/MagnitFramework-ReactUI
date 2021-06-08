import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid } from "@material-ui/core";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";
const SolutionsSection = ({data}) => {
  const classes = useStyles();
  const { card, devSec, profileIcon } = classes;
  const { Tundora } = Colors;
  return (
    <>
      <Grid container justify="center" spacing={2}>
        {data && data.map((data,index)=>{
          return(
            <Grid key={index+"sloutionscontent"} item xs={10} sm={5} md={3}>
            <Grid item xs={12} className={card}>
              <Grid item className={devSec}>
                <CustomImage alt="icon" className={profileIcon} src={data.icon} />
              </Grid>
              <Grid item>
                <Typography variant="h5" style={{ color: Tundora }}>
                  {data.title}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          )
        })}
      
      
      </Grid>
    </>
  );
};

export default SolutionsSection;
