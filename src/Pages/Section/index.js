import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import LayoutStyle from "./style";

const Section = ({
  title,
  children,
  backColor,
  startQuote,
  endQuote,
  highlightWords,
}) => {
  const {
    root,
    content,
    header,
    underlinedStyles,
    startQuote1,
    startQuote2,
    endQuote1,
    endQuote2,
  } = LayoutStyle();

  const titleText = title.split("/");
  const normalTitle = titleText[0];
  const underlinedTitle = titleText[1];

  return (
    <div className={root} style={{ backgroundColor: backColor }}>
      <div className={content}>
        {startQuote && (
          <>
            <img
              className={startQuote1}
              src={startQuote}
              alt="Start Quote Icon"
            />
            <img
              className={startQuote2}
              src={startQuote}
              alt="Start Quote Icon"
            />
          </>
        )}
        {endQuote && (
          <>
            <img className={endQuote1} src={endQuote} alt="End Quote Icon" />
            <img className={endQuote2} src={endQuote} alt="End Quote Icon" />
          </>
        )}
        {title && (
          <Typography className={header} color="textPrimary" variant="h2">
            {normalTitle}
            <span className={underlinedStyles}>{underlinedTitle}</span>
          </Typography>
        )}

        <Grid item xs={12}>
          {children}
        </Grid>
      </div>
    </div>
  );
};

Section.defaultProps = {
  backColor: "#FFFFFF",
  title: "",
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  backColor: PropTypes.string,
};

export default Section;
