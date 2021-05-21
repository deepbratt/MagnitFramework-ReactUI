import React from "react";
import { useStyles } from "./useStyles";
import { Typography, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CustomImage from "../../../Components/CustomImage";
import { Colors } from "../../../Theme/color.constants";
import { THEME } from "../../../ContainerStructure/Headings/headingStyles";
const { Mirage } = Colors;
const PrimarySection = (props) => {
  const data = props.data;
  const classes = useStyles();
  const { cardSec, supportSub, para ,grid} = classes;

  return (
    <>
      {data.map((text, index) => {
        return (
          <Grid key={index} item className={cardSec}>
            <Grid container>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className={grid}
                item
                xs={12}
                lg={3}
                sm={12}
              >
                <Grid
                  item
                  style={{ backgroundColor: text.color }}
                  className={supportSub}
                >
                  <CustomImage alt="icon" src={text.icon} />
                </Grid>
              </Grid>
                <Grid className={para} item xs={12} lg={9}>
                  <Typography variant="h5">{text.title}</Typography>
                  <Typography paragraph={true} style={{ color: Mirage }}>
                    {text.desc}
                  </Typography>
                </Grid>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default PrimarySection;
