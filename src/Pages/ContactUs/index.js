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
import {
  ExperienceIcon,
  TeamIcon,
  CustomerIcon,
  ServedIcon,
  ProjectIcon,
  CertificationIcon,
} from "../../assets/icons/icon.constants";

const ContactUs = () => {
  const {
    mustardColor,
    darkBlueColor,
    orangeRed,
    spaceCadet,
    rosePinkColor,
    Luigi,
  } = Colors;

  const { experience, team, customers, served, projects, certification } =
    FactCardText;
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
              backColor={mustardColor}
              icon={ExperienceIcon}
              title={experience.title}
              subtitle={experience.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={darkBlueColor}
              icon={TeamIcon}
              title={team.title}
              subtitle={team.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={orangeRed}
              icon={CustomerIcon}
              title={customers.title}
              subtitle={customers.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={spaceCadet}
              icon={ServedIcon}
              title={served.title}
              subtitle={served.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={rosePinkColor}
              icon={ProjectIcon}
              title={projects.title}
              subtitle={projects.subTitle}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FactCard
              backColor={Luigi}
              icon={CertificationIcon}
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
