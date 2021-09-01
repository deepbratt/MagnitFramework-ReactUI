import { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import Read from "../ReadMore";
import CustomButton from "../CustomButton";
import ReactCardFlip from "react-card-flip";
import CustomImage from "../CustomImage";
import PointBadgeStyles from "./style";

const PointBadge = ({ horizontal, data, alt }) => {
  const { title, description, image, buttonLabel } = data;
  const {
    vertical,
    inline,
    name,
    detail,
    devSec,
    supportSub,
    contentLeft,
    contentRight,
    VertSec,
    supportSubVert,
    badge
  } = PointBadgeStyles();

  const [isFlipped, setFlipped] = useState(false);

  return (
    <>
      {horizontal === false ? (
        <div
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
          style={{flexGrow:1}}
        >
          <ReactCardFlip
            isFlipped={isFlipped}
            className={vertical}
            flipDirection="horizontal"
          >
            <Grid className={VertSec} onMouseEnter={() => setFlipped(true)}>
              <section className={supportSubVert}>
                <CustomImage alt={alt} width="auto" height="80%" src={image} className={badge} />
              </section>
              <section>
                <Typography
                  color="textPrimary"
                  variant="subtitle1"
                  className={name}
                  gutterBottom
                >
                  {title}
                </Typography>
              </section>
            </Grid>
            <Grid
              className={contentRight}
              onMouseLeave={() => setFlipped(false)}
              style={{justifyContent: data.buttonLink !=="/" ? "space-around" :"center"}}
            >
              <div>
                <Typography
                  color="textPrimary"
                  variant="subtitle1"
                  className={name}
                  gutterBottom
                >
                  {title}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{ cursor: "pointer" }}
                  variant="subtitle2"
                  className={detail}
                >
                  {description}
                </Typography>
              </div>
              {data.buttonLabel && data.buttonLink !=="/" ?  (
                <div>
                  <CustomButton size="small">{buttonLabel}</CustomButton>
                </div>
              ) : null}
            </Grid>
          </ReactCardFlip>
        </div>
      ) : (
        <Grid className={inline}>
          <Grid className={devSec}>
            <section className={supportSub}>
              <CustomImage alt={alt} width="100%" src={image} />
            </section>
          </Grid>
          <Grid className={contentLeft}>
            <Typography
              color="textPrimary"
              variant="subtitle1"
              component="h5"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              style={{ cursor: "pointer" }}
              variant="subtitle2"
              component="h6"
            >
              <Read text={description} ellipses="... Read More" maxLines={2} />
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

PointBadge.defaultProps = {
  horizontal: false,
};

PointBadge.propTypes = {
  horizontal: PropTypes.bool,
  data: PropTypes.object.isRequired,
};

export default PointBadge;
