import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import CustomImage from "../../Components/CustomImage";
import LayoutStyle from "./style";

const Section = ({ children, backColor, startQuote, endQuote, patterns }) => {
  const {
    root,
    content,
    startQuote1,
    startQuote2,
    endQuote1,
    endQuote2,
  } = LayoutStyle();

  return (
    <div className={root} style={{ backgroundColor: backColor }}>
      {patterns && patterns.map((pattern, index) => <span key={index}>{pattern.image}</span>)}
      <div className={content}>
        {startQuote && (
          <>
            <CustomImage
              className={startQuote1}
              src={startQuote}
              alt="Start Quote Icon"
            />
            <CustomImage
              className={startQuote2}
              src={startQuote}
              alt="Start Quote Icon"
            />
          </>
        )}
        {endQuote && (
          <>
            <CustomImage
              className={endQuote1}
              src={endQuote}
              alt="End Quote Icon"
            />
            <CustomImage
              className={endQuote2}
              src={endQuote}
              alt="End Quote Icon"
            />
          </>
        )}
        <Grid item xs={12}>
          {children}
        </Grid>
      </div>
    </div>
  );
};

Section.defaultProps = {
  backColor: "transparent",
  title: "",
  subTitle: "",
};

Section.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  backColor: PropTypes.string,
  patterns: PropTypes.array,
};

export default Section;
