import React from "react";
import { useStyles } from "./careerStyles";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import Breakpoints from "../../Theme/theme.breakpoints";
import { Colors } from "../../Theme/color.constants";
import {
  DataArray,
  heading,
  rightPattern,
  leftPattern,
} from "../../Utils/Constants/Language/en/CareersData";
import CustomButton from "../../Components/CustomButton";
import ReadMore from "../../Components/ReadMore";
import CustomTitle from "../Section/CustomTitle";
const OpportunityContext = () => {
  const classes = useStyles();
  const {
    root,
    card,
    devSec,
    HeadSec,
    para,
    button,
    RightPattern,
    LeftPattern,
    remoteArea,
    bottomStyle,
  } = classes;
  const { whiteColor, Harlequin } = Colors;
  return (
    <>
      <Grid container className={root} spacing={0} justify="center">
        <Grid item xs={12}>
          <img className={RightPattern} alt="" src={rightPattern} />
          <img className={LeftPattern} alt="" src={leftPattern} />
          <section>
          <CustomTitle color={whiteColor} text={heading} underlined={false}/>
          </section>
        </Grid>
        {/* <section className={cardSec}> */}
        {DataArray.map((data, index) => {
          return (
            <Grid
              xs={12}
              sm={4}
              md={4}
              lg={3}
              item
              className={card}
              key={index}
            >
              <Grid className={devSec}>
                <Grid xs={12} className={HeadSec}>
                  <Typography variant="subtitle1">
                    {data.title}
                  </Typography>
                </Grid>
                <Grid className={remoteArea}>
                  <div style={{ marginRight: ".5rem" }}>
                    <img alt="" width="10px" src={data.icon} />
                  </div>
                  <div>
                    <Typography variant="subtitle2">
                      {data.span}
                    </Typography>
                  </div>
                </Grid>
                <Grid xs={12} className={para}>
                  <Typography variant="body1" component="body1">
                    <ReadMore
                      text={data.desc}
                      maxLines={3}
                      ellipses="... Read More"
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs={12} className={bottomStyle}>
                <CustomButton
                  style={{
                    textTransform: "none",
                  }}
                  variant="contained"
                  className={button}
                  size={Breakpoints()}
                >
                  {data.buttonText}
                </CustomButton>
              </Grid>
            </Grid>
          );
        })}
        {/* </section> */}
        <Grid item xs={12}>
          <CustomButton
            style={{
              textTransform: "none",
              backgroundColor: Harlequin,
              color: whiteColor,
            }}
            variant="contained"
            size={Breakpoints()}
          >
            Learn More
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default OpportunityContext;
