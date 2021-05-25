import { Grid, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import CertificationListStyles from "./style";

const CertificationList = ({ root, data }) => {
  const { text, imageWrapper } = CertificationListStyles();
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
    <Grid container className={root}>
      <Grid item xs={12} md={6}>
        <div className={text}>
          <Typography color="textPrimary" variant="h3" >{title}</Typography>
          <Typography variant="subtitle2" component="p">
            {content}
          </Typography>
        </div>
      </Grid>
      <Grid xs={12} md={6} className={imageWrapper}>
        <Lottie options={defaultOptions} />
      </Grid>
    </Grid>
  );
};

export default CertificationList;
