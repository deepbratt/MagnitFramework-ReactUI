import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import LayoutStyle from "./style";

const Section = ({ title, children, backColor }) => {
  const { root, content, header } = LayoutStyle();
  return (
    <div className={root} style={{ backgroundColor: backColor }}>
      <div className={content}>
        {title && (
          <Typography className={header} color="textPrimary" variant="h2">
            {title}
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
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  backColor: PropTypes.string,
};

export default Section;
