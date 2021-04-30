import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import GlanceSection from "../GlanceAtWorkContext/Container";
import { webDevServicesData as servicesData } from "./webDevServicesData";
import { whyHireData as hireUsData } from "./whyHireData";
import { Colors } from "../../Theme/color.constants";
import Banner from "../../Components/Banner";
import {
  HiringSectionTitle,
  ServicesSectionTitle,
  WhyHireSectionTitle,
} from "./constants";

const Services = () => {
  const { aliceBlue } = Colors;
  return (
    <div className="root">
      <Section>
        <Banner
          text={`We Hire Best \n Web Developers & Save 50%`}
          subtext="We have a talent pool of qualified & well-experienced web developers."
        ></Banner>
      </Section>
      <Section title={ServicesSectionTitle}>
        <PointList data={servicesData} />
      </Section>
      <Section title={HiringSectionTitle}></Section>
      <Section title={WhyHireSectionTitle}>
        <PointList data={hireUsData} horizontal={true} />
      </Section>
      <Section backColor={aliceBlue}>
        <GlanceSection backColor = {aliceBlue} />
      </Section>
    </div>
  );
};

export default Services;
