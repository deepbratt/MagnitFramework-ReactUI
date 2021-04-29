import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import BannerStyles from "./styles";

const Banner = ({ backColor, image, backGroundPattern, text, subtext }) => {
  const { root, title } = BannerStyles();
  return (
    <div className={root} style={{ backgroundColor: backColor }}>
      <img src={image} alt="" />
      <img src={backGroundPattern} alt="" />
      <Typography className={title} variant="h2">
        {text}
      </Typography>
      <Typography variant="subtitle1">{subtext}</Typography>
    </div>
  );
};

Banner.defaultProps = {
  backColor: "white",
};

Banner.propTypes = {
  backColor: PropTypes.string,
  text: PropTypes.string,
  subtext: PropTypes.string,
};

export default Banner;
