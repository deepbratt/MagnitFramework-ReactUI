import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./containerStyles";
import { Typography, Grid, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CustomButton from "../../../Components/CustomButton";
import CustomImage from "../../../Components/CustomImage";
import CustomTitle from "../../../Pages/Section/CustomTitle";
import { Colors } from "../../../Theme/color.constants";

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
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CustomImage src={items.image} alt={props.alt} style={{ width: "100%" }} />
              <CardContent className={cardContent}>
                <Typography variant="h5">{items.title}</Typography>
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
