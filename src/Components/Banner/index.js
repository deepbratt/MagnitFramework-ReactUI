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
      {breadCrumb && (
        <Grid item xs={12} className={breadCrumbStyle}>
          {breadCrumb}
        </Grid>
      )}
      <Grid
        className={root}
        container
        style={{ background: linearBackground }}
        alignItems="center"
      >
        <Grid item xs={12} lg={6} md={12} className={content}>
          {children}
        </Grid>
        <Grid style={{ position: "relative" }} item lg={5} xs={12}>
          <CustomImage
            className={patternPosition}
            src={StarFishPinkPattern}
            alt=""
            srcset=""
          />
          <Grid className={imageWrapper}>
            <CustomImage src={image} alt="" />
          </Grid>
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
