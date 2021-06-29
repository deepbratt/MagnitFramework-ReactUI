import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage";
import PointBadgeStyles from "./style";
import Read from "../ReadMore";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import CustomButton from "../CustomButton";
import {webDevServicesData} from "../../Pages/WebServices/webDevServicesData"
const PointBadge = ({ horizontal, data}) => {
  const { color, icon, title, desc,description,image,buttonLabel } = data;
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
        <div  onMouseEnter={() => setFlipped(true)}  onMouseLeave={() => setFlipped(false)}>
        <ReactCardFlip
          isFlipped={isFlipped}
          className={vertical}
          flipDirection="horizontal"

        >
          <Grid
            className={VertSec}
            onMouseEnter={() => setFlipped(true)}
          >

              <section  className={supportSub}>
              <CustomImage
                alt="icon"
                width="100%"
                className={badge}
                src={image}
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
            onMouseLeave={() => setFlipped(false)}
          >
            <div >
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
            <div>
              <CustomButton size="small">{buttonLabel}</CustomButton>
            </div>
          </Grid>
        </ReactCardFlip>
        </div>
      ) : (
        <Grid className={inline}>
          <Grid className={devSec}>
       
           <section className={supportSub}>
              <CustomImage
              alt="icon"
              height="100%"
              src={image}
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
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    // icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
};

export default PointBadge;
