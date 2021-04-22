import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import LayoutStyle from "./style";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MyAccordion = ({ questions }) => {
  const { root } = LayoutStyle();

  return (
    <div className={root}>
      {questions
        .filter((question, idx) => idx < 3)
        .map((question, index) => (
          <>
            <Accordion square key={index}>
              <AccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6">{question.summary}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{question.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
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
