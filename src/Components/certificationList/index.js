import { Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import CertificationListStyles from "./style";

const CertificationList = ({ data }) => {
  const { root, text, imageWrapper } = CertificationListStyles();
  const { title, content, animationData } = data;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={root}>
      <div className={text}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="subtitle1">{content}</Typography>
      </div>
      <div className={imageWrapper}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default CertificationList;
