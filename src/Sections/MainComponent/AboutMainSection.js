import React from "react";
import { useStyles } from "./mainStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
import BreadCrumb from "../../Components/BreadCrumb";
import CustomImage from "../../Components/CustomImage";
import CustomTitle from "../../Pages/Section/CustomTitle";

const AboutMainSection = (props) => {
  const { data, width, breadcrumbData } = props;

  const classes = useStyles();
  const { root, cardSec, breadCrumbStyles, paragraphStyle, card } = classes;
  return (
    <>
      <Grid container className={root}>
        <Grid item xs={12}>
          <Card style={{ padding: "0px" }} className={card}>
            <div className={breadCrumbStyles}>
              <BreadCrumb links={breadcrumbData} />
            </div>
            <CardContent className={cardSec}>
              <CustomImage
                width={width}
                className={props.class}
                alt="hero"
                src={data.image}
              />
            </CardContent>
          </Card>

          {props.card === true ? (
            <Card>
              <CardContent className={cardSec}>
                <CustomTitle
                  style={{ marginBottom: "20px" }}
                  text={data.heading}
                  underlined={true}
                />
                <Grid
                  item
                  lg={7}
                  md={7}
                  sm={10}
                  xs={10}
                  className={paragraphStyle}
                >
                  {data.subHeading && (
                    <Typography color="textSecondary" variant="h5">
                      {data.subHeading}
                    </Typography>
                  )}
                </Grid>
              </CardContent>
            </Card>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMainSection;
