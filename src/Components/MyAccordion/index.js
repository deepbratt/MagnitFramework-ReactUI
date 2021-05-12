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
import Data from "../../Pages/ContactUs/questions"

const MyAccordion = () => {
  const [payload, setPayload] = useState(Data);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { root } = LayoutStyle();

  const dispatchClick = (index) => {
    let _shallowCopy = [...payload];
    let _cItem = { ..._shallowCopy[index] };
    _cItem["x"] = _cItem["x"] === "+" ? "-" : "+";
    _shallowCopy[index] = _cItem;
    setPayload(_shallowCopy);
  };

  return (
    <div className={root}>
      {(
        payload.map((question, index) => (
          <Accordion
            // expanded={…(expanded === "panel" && {expanded: true})}
            {...(expanded === "panel" && {expanded: true})}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={
                <div onClick={() => dispatchClick(index)}>
                  {question.x === "+" ? (
                    <img src={Plus} />
                  ) : (
                    <img src={Minus} />
                  )}
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>{question.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      )}
      <CustomButton text="See More" />
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
