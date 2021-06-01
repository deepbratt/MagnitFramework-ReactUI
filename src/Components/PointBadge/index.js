import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage";
import PointBadgeStyles from "./style";
import Read from "../ReadMore";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import CustomButton from "../CustomButton";
const PointBadge = ({ horizontal, data }) => {
  const { color, icon, title, desc, length } = data;
  const {
    vertical,
    inline,
    badge,
    name,
    detail,
    devSec,
    supportSub,
    contentLeft,
    contentRight,
    VertSec,
  } = PointBadgeStyles();
 
  const [isFlipped, setFlipped] = useState(false);

  return (
    <>
      {horizontal === false ? (
        <ReactCardFlip
          isFlipped={isFlipped}
          className={vertical}
          flipDirection="horizontal"
        >
          <Grid
            className={VertSec}
            onMouseEnter={() => setFlipped((prev) => !prev)}
          >
            <section style={{ backgroundColor: color }} className={supportSub}>
              <CustomImage
                alt="icon"
                width="50px"
                height="50px"
                className={badge}
                src={icon}
              />
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
            onMouseLeave={() => setFlipped((prev) => !prev)}
          >
            <div style={{padding:"1rem"}}>
              <Typography
                color="textPrimary"
                variant="subtitle1"
               className={name}
                gutterBottom
              >
                {title}
              </Typography>
              <Typography
                style={{ cursor: "pointer" }}
                variant="subtitle2"
                className={detail}
              >
                <Read text={desc} maxLines={3} />
              </Typography>
            </div>
            <div>
              <CustomButton size="small">Read More</CustomButton>
            </div>
          </Grid>
        </ReactCardFlip>
      ) : (
        <Grid className={inline} flipDirection="horizontal">
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
              <Read text={desc} ellipses="... Read More" maxLines={2} />
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
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
};

export default PointBadge;
