import { Grid, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import CertificationListStyles from "./style";

const CertificationList = ({ root, data, toRight }) => {
  const { text, imageWrapper, leftAlignment, rightAlignment } =
    CertificationListStyles();
  const { title, content, animationData } = data;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container className={`${root}`}>
      <Grid item xs={12} md={6}>
        <div className={`${text} ${toRight ? rightAlignment : leftAlignment}`}>
          <Typography color="textPrimary" variant="h3">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {content}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={imageWrapper}>
        <Lottie options={defaultOptions} width="400px" />
      </Grid>
    </Grid>
  );
};

export default CertificationList;
