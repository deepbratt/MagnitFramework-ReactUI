import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";
import CustomImage from "../../Components/CustomImage";
import LayoutStyle from "./style";

const Section = ({
  title,
  subTitle,
  children,
  backColor,
  startQuote,
  endQuote,
  highlightWords,
}) => {
  const {
    root,
    content,
    subHeader,
    sectionHeader,
    startQuote1,
    startQuote2,
    endQuote1,
    endQuote2,
  } = LayoutStyle();

  return (
    <div className={root} style={{ backgroundColor: backColor }}>
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
        <div className={sectionHeader}>
          {title && <SectionHeading header={title} />}

          {subTitle && (
            <Typography
              className={subHeader}
              color="textPrimary"
              variant="subtitle1"
            >
              {subTitle}
            </Typography>
          )}
        </div>
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
};

export default Section;
