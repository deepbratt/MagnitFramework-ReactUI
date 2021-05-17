import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import BannerStyles from "./styles";
import StarFishPinkPattern from "../../assets/patterns/starfish-pink.png";
import { Colors } from "../../Theme/color.constants";
import CustomImage from "../CustomImage";
const Banner = ({
  backColor,
  image,
  breadCrumb,
  children,
  backgroundPattern,
}) => {
  const { linearBackground } = Colors;
  const { root, imageWrapper, breadCrumbStyle, content, patternPosition } =
    BannerStyles();
  return (
    <>
      <Grid className={root} container style={{ background: linearBackground }}>
        {breadCrumb && (
          <Grid item xs={12}>
            <div className={breadCrumbStyle}>{breadCrumb}</div>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <div className={content}>{children}</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomImage
            className={patternPosition}
            src={StarFishPinkPattern}
            alt=""
            srcset=""
          />
          <div className={imageWrapper}>
            <CustomImage src={image} alt="" />
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
  breadCrumb: PropTypes.element,
};

export default Banner;
