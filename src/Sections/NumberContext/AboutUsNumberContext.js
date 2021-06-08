import React from "react";
import { Grid } from "@material-ui/core";
import { Stats } from "../../Utils/Constants/Language/AboutUsData";
import Section from "../../Pages/Section";
import FactCard from "../../Components/FactCard";

const AboutUsNumberContext = () => {
  return (
    <>
      <Section>
        <Grid container justify="center" direction="row" alignItems="stretch">
          {Stats &&
            Stats.map((stats, index) => (
              <Grid key={index+"stats"} item xs={12} md={5} lg={3} style={{display:"flex"}} >
                <FactCard
                  icon={stats.icon}
                  title={stats.title}
                  subtitle={stats.sutitle}
                  backColor={stats.color}
                />
              </Grid>
            ))}
        </Grid>
      </Section>
    </>
  );
};

export default AboutUsNumberContext;
