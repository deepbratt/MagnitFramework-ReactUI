import React from "react";
import PropTypes from "prop-types";
import Section from "../Section";
import PointList from "../../Components/PointBadge/PointList";
import CustomTitle from "../Section/CustomTitle";

const WhyUsContainer = ({ title, data }) => {
  return (
    <Section>
      <CustomTitle text={title} underlined={true} />
      <PointList data={data} horizontal={true} lgBreakpoint={6} />
    </Section>
  );
};

WhyUsContainer.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default WhyUsContainer;
