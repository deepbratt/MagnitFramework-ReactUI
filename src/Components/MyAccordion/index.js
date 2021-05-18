import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import LayoutStyle from "./style";
import { useState } from "react";
import CustomButton from "../CustomButton";
import Plus from "../../assets/icons/expandIcon.png";
import Minus from "../../assets/icons/closeIcon.png";
import Data from "../../Pages/ContactUs/questions";

const MyAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { root } = LayoutStyle();
  const accordionDataController = [
    {
      ariaControl: "panel1a-content",
      ariaId: "panel1a-header",
      summary: Data[0].summary,
      detail: Data[0].detail,
    },
    {
      ariaControl: "panel2a-content",
      ariaId: "panel2a-header",
      summary: Data[1].summary,
      detail: Data[1].detail,
    },
    {
      ariaControl: "panel3a-content",
      ariaId: "panel3a-header",
      summary: Data[2].summary,
      detail: Data[2].detail,
    },
    {
      ariaControl: "panel4a-content",
      ariaId: "panel4a-header",
      summary: Data[3].summary,
      detail: Data[3].detail,
    },
  ];

  return (
    <div className={root}>
      {accordionDataController.map((item, index) => (
        <Accordion
          key={"accordion-" + index}
          expanded={expanded === "accordion-" + index}
          onChange={handleChange("accordion-" + index)}
        >
          <AccordionSummary
            expandIcon={
              expanded === "accordion-" + index ? (
                <img src={Minus} />
              ) : (
                <img src={Plus} />
              )
            }
            aria-controls={item.ariaControl}
            id={item.ariaId}
          >
            <Typography>{item.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <CustomButton>See More</CustomButton>
    </div>
  );
};

MyAccordion.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.string,
      detail: PropTypes.string,
    })
  ).isRequired,
};

export default MyAccordion;
