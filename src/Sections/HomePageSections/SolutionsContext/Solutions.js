import React from "react";
import { useStyles } from "./solutionStyles";
import { Typography, Grid, Card } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Colors } from "../../../Theme/color.constants";
import CustomButton from "../../../Components/CustomButton";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import CustomImage from "../../../Components/CustomImage";

const Solutions = ({ title, content, subTitle,alt}) => {
  const classes = useStyles();
  const { card } = classes;

  const { whiteColor } = Colors;
  return (
    <>
      <Grid container>
        <Grid style={{ color: whiteColor }} item lg={12} md={12} xs={12}>
          <CustomTitle
            style={{ marginBottom: "20px" }}
            underlined={false}
            subTitle={subTitle}
            color={whiteColor}
            text={title}
            subTitleColor={whiteColor}
          />
        </Grid>
        <Grid style={{ marginBottom: "20px", color:"white" }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {content &&
                content.map((data, index) => (
                  <Grid key={index+"solutionscontentdata"} item xs={12} sm={6} md={3}>
                    <Card style={{borderRadius: "5px"}} className={card}>
                      <CustomImage width="100%" height="100%" alt={alt} src={data.image} />
                    </Card>
                    <div>
                      <Typography variant="h5">
                        {data.title}
                      </Typography>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <NavLink style={{ textDecoration: "none" }} to="app-solutions">
            <CustomButton color="secondary">See More</CustomButton>
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
};

export default Solutions;
