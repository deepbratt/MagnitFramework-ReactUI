import React from "react";
import { useStyles } from "./containerStyles";
import { Typography, Grid, Card } from "@material-ui/core";
import { NavLink } from "react-router-dom";
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
                borderRadius: "5px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <CustomImage
                  src={items.image}
                  alt={props.alt}
                  style={{ width: "100%" }}
                />
              </div>
              <CardContent className={cardContent}>
                <Typography variant="h5">{items.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item lg={12} md={12} xs={12}>
          <NavLink style={{ textDecoration: "none" }} to="testimonial">
            <CustomButton color="secondary">{props.buttonText}</CustomButton>
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
