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

const MyAccordion = ({questions}) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { root } = LayoutStyle();
  const accordionDataController = [
    {
      ariaControl: "panel1a-content",
      ariaId: "panel1a-header",
      summary: questions[0].questions,
      detail: questions[0].answers,
    },
    {
      ariaControl: "panel2a-content",
      ariaId: "panel2a-header",
      summary: questions[1].questions,
      detail: questions[1].answers,
    },
    {
      ariaControl: "panel3a-content",
      ariaId: "panel3a-header",
      summary: questions[2].questions,
      detail: questions[2].answers,
    },
    {
      ariaControl: "panel4a-content",
      ariaId: "panel4a-header",
      summary: questions[3].questions,
      detail: questions[3].answers,
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
                <img src={Minus} alt="" />
              ) : (
                <img src={Plus} alt="" />
              )
            }
            aria-controls={item.ariaControl}
            id={item.ariaId}
          >
            <Typography variant="h6">{item.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{item.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <CustomButton>See More</CustomButton> */}
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
