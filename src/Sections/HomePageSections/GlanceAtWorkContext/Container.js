import React from "react";
import { useStyles } from "./containerStyles";
import { Typography, Grid, Card } from "@material-ui/core";
import { Colors } from "../../../Theme/color.constants";
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import CardContent from "@material-ui/core/CardContent";
const Container = (props) => {
  const classes = useStyles();
  const { whiteColor } = Colors;
  const { cardContent } = classes;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomTitle
            style={{ marginBottom: "20px", color: "#fff" }}
            underlined={false}
            color={whiteColor}
            text={props.title}
          />
        </Grid>
        {props.data.map((items, index) => (
          <Grid item xs={12} lg={4} md={4} key={"ourWork-" + index}>
            <Card style={{ height: "100%", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
              <CustomImage src={items.image} style={{ width: "100%" }} />
              <CardContent className={cardContent}>
                <Typography variant="h5" >{items.subtitle}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item lg={12} md={12} xs={12}>
          <CustomButton color="secondary">{props.buttonText}</CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
