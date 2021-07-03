import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import BannerStyles from "./styles";
import CustomImage from "../CustomImage";
import { Colors } from "../../Theme/color.constants";
import StarFishPinkPattern from "../../assets/patterns/starfish-pink.png";

const Banner = ({ image, breadCrumb, children,alt }) => {
  const { linearBackground } = Colors;
  const { root, imageWrapper, content, patternPosition } = BannerStyles();
  return (
    <>
      <Grid className={root} container style={{ background: linearBackground }}>
        {breadCrumb && (
          <Grid item xs={12}>
            {breadCrumb}
          </Grid>
        )}
        <Grid item xs={12} md={6} lg={7} className={content}>
          {children}
        </Grid>
        <Grid style={{ position: "relative" }} item xs={12} md={6} lg={5}>
          <CustomImage
            className={patternPosition}
            src={StarFishPinkPattern}
            alt=""
            
          />
            <Grid className={imageWrapper}>
            <CustomImage src={image} alt={alt} />
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
  breadCrumb: PropTypes.element,
};

export default Banner;
