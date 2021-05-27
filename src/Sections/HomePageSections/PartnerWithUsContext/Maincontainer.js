import React from "react";
import PointList from "../../../Components/PointBadge/PointList";
import Section from "../../../Pages/Section";
import {
  PrimaryArray
} from "../../../Utils/Constants/Language/en/PartnerWithUsData";
const Container = () => {
  return (
    <>
      {/* <Grid container>
        <Grid item md={12} xs={12}>
          <Grid className={root} elevation={0}>
                <Typography variant="h2" color="inherit">
                  Why Partner <span className={underlined}>with Us?</span>
                </Typography>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <PrimarySection
          data={PrimaryArray}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <SecondarySection
            data={SecondaryArray}
          />
        </Grid>
      </Grid> */}
      <Section title={"Why Partner /with Us?"}>
        <PointList data={PrimaryArray} horizontal={true} lgBreakpoint={6}/>
      </Section>
    </>
  );
};

export default Container;
