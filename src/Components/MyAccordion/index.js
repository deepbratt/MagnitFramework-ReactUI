import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import LayoutStyle from "./style";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandIcon from "../../assets/icons/expandIcon.png";
import CloseIcon from "../../assets/icons/closeIcon.png";
import { useState } from "react";
import CustomButton from "../CustomButton";

const MyAccordion = ({ questions }) => {
  const { root, title, details } = LayoutStyle();

  const [expanded, setExpanded] = useState(false);
  return (
    <div className={root}>
      {questions
        .filter((question, idx) => idx < 3)
        .map((question, index) => (
          <Accordion
            onChange={() => setExpanded(expanded ? false : true)}
            square
            key={index}
          >
            <AccordionSummary
              expandIcon={
                <img src={expanded === true ? CloseIcon : ExpandIcon} alt="" />
              }
            >
              <Typography className={title} variant="h6">
                {question.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={details} variant="body2">
                {question.detail}
              </Typography>
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
