import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage";
import PointBadgeStyles from "./style";
import Read from "../ReadMore";

const PointBadge = ({ horizontal, data }) => {
  const { color, icon, title, desc } = data;
  const {
    vertical,
    inline,
    badge,
    devSec,
    supportSub,
    contentLeft,
    contentRight,
  } = PointBadgeStyles();
  return (
    <div className={horizontal ? inline : vertical}>
      <Grid className={devSec}>
        <section style={{ backgroundColor: color }} className={supportSub}>
          <CustomImage
            alt="icon"
            width="50px"
            height="50px"
            className={badge}
            src={icon}
          />
        </section>
      </Grid>
      <Grid className={horizontal ? contentLeft : contentRight}>
        <Typography color="textPrimary" variant="subtitle1" style={{fontWeight:600}} gutterBottom>
          {title}
        </Typography>
        <Typography
          style={{ cursor: "pointer", fontWeight:400 }}
          variant="subtitle2"
          // component="subtitle2"
        >
          <Read text={desc} ellipses="... Read More" maxLines={2} />
        </Typography>
      </Grid>
    </div>
  );
};

PointBadge.defaultProps = {
  horizontal: false,
};

PointBadge.propTypes = {
  horizontal: PropTypes.bool,
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
};

export default PointBadge;
