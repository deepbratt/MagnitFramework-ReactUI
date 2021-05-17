import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage";
import PointBadgeStyles from "./style";

const PointBadge = ({ horizontal, data }) => {
  const { color, icon, title, desc } = data;
  const { vertical, inline, badge, contentLeft, contentRight } =
    PointBadgeStyles();
  return (
    <div className={horizontal ? inline : vertical}>
      <CustomImage
        className={badge}
        width="50px"
        style={{ backgroundColor: color }}
        src={icon}
        alt=""
      />
      <div className={horizontal ? contentLeft : contentRight}>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {desc}
        </Typography>
      </div>
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
