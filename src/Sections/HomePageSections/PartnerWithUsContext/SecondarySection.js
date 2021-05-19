import React from "react";
import { useStyles } from "./sectionStyles";
import { Typography, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Colors } from "../../../Theme/color.constants";
import CustomImage from "../../../Components/CustomImage";
import { THEME } from "../../../ContainerStructure/Headings/headingStyles";
const { Mirage } = Colors;
const SecondarySection = (props) => {
  const data = props.data;

  const classes = useStyles();
  const { cardSec, supportSub, para } = classes;

  return (
    <>
      {data.map((text, index) => {
        return (
          <Grid item className={cardSec}>
            <Grid key={index} container>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "40px",
                }}
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
              <MuiThemeProvider theme={THEME}>
                <Grid className={para} item xs={12} lg={9} >
                  <Typography variant="h5">{text.title}</Typography>
                  <Typography paragraph={true} style={{ color: Mirage }}>
                    {text.desc}
                  </Typography>
                </Grid>
              </MuiThemeProvider>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default SecondarySection;
