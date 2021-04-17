import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import LayoutStyle from "./style";

const Section = ({ title, children }) => {
  const { root, header } = LayoutStyle();
  return (
    <div className={root}>
      <Typography className={header} color="textPrimary" variant="h2">
        {title}
      </Typography>
      <Grid item xs={12}>
        {children}
      </Grid>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
