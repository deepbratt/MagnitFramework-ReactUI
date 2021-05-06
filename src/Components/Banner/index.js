import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import BannerStyles from "./styles";
import StarFishPinkPattern from "../../assets/patterns/starfish-pink.png";
import { Colors } from "../../Theme/color.constants";
const Banner = ({ backColor, image, children, backgroundPattern }) => {
  const { linearBackground} = Colors;
  const { root, imageWrapper, content, patternPosition } = BannerStyles();
  return (
    <>
      <Grid className={root} container style={{background:linearBackground}}>
        <Grid item sm={12} md={6}>
          <div className={content}>{children}</div>
        </Grid>
        <Grid item sm={12} md={6}>
          <img
            className={patternPosition}
            src={StarFishPinkPattern}
            alt=""
            srcset=""
          />
          <div className={imageWrapper}>
            <img src={image} alt="" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

Banner.defaultProps = {
  backColor: "white",
};

Banner.propTypes = {
  backColor: PropTypes.string,
  children: PropTypes.element,
};

export default Banner;
