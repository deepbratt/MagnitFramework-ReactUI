import { Grid } from "@material-ui/core";
import Section from "../Section";
import FactCard from "../../Components/FactCard";
import {
  RequestAQuote,
  RequestAQuoteSub,
  SomeQuickFactsAboutUs,
} from "../../Utils/Constants/Language/en/SectionHeaders";
import { Colors } from "../../Theme/color.constants";
import { FactCardText } from "../../Utils/Constants/Language/en/ContactUsPageText";

const ContactUs = () => {
  const {
    deepSaffron,
    ultramarineBlue,
    carrotOrange,
    seaSerpent,
    begonia,
    brunswickGreen,
  } = Colors;

  const {
    experience,
    team,
    customers,
    served,
    projects,
    certification,
  } = FactCardText;
  return (
    <>
      <Section title={RequestAQuote} subTitle={RequestAQuoteSub}>
        <Grid container>
          <Grid item xs={12}></Grid>
        </Grid>
      </Section>
      {/* SOME FACTS ABOUT US SECTION */}
      <Section title={SomeQuickFactsAboutUs}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={deepSaffron}
              title={experience.title}
              subtitle={experience.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={ultramarineBlue}
              title={team.title}
              subtitle={team.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={carrotOrange}
              title={customers.title}
              subtitle={customers.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={seaSerpent}
              title={served.title}
              subtitle={served.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={begonia}
              title={projects.title}
              subtitle={projects.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={brunswickGreen}
              title={certification.title}
              subtitle={certification.subTitle}
            />
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default ContactUs;
