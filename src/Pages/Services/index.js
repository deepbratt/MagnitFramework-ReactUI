import PointList from "../../Components/PointBadge/PointList";
import Section from "../Section";
import { webDevServicesData as servicesData } from "./webDevServicesData";
import { whyHireData as hireUsData } from "./whyHireData";

const Services = () => {
  return (
    <div className="root">
      <Section title="Web Development Services">
        <PointList data={servicesData} />
      </Section>
      <Section title="Web Developer Hiring Options"></Section>
      <Section title="Why Hire a Web Developer from Us?">
        <PointList data={hireUsData} horizontal={true} />
      </Section>
      <Section title="A Glance at Our Work" backColor="#E8F2FE"></Section>
    </div>
  );
};

export default Services;
