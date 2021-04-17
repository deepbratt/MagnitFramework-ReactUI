import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import LayoutStyle from "./style";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MyAccordion = ({ questions }) => {
  const { root, accordion, summary, detail } = LayoutStyle();
  return (
    <div className={root}>
      {questions.map((question, index) => (
        <>
          <Accordion square key={index}>
            <AccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="caption">
                {question.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{question.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
};

// Accordian.propTypes = {
//   questions: PropTypes.arrayOf(
//     PropTypes.shape({
//       summary: PropTypes.string,
//       detail: PropTypes.string,
//     })
//   ).isRequired,
// };

// Accordian.propTypes = {
//   question: PropTypes.string,
//   description: PropTypes.string,
// };

export default MyAccordion;
