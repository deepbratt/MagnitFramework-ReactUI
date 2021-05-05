import { Typography } from "@material-ui/core";
import CertificationListStyles from "./style";

const CertificationList = ({ data }) => {
  const { root, text, imageWrapper } = CertificationListStyles();
  const { title, content, media } = data;
  return (
    <div className={root}>
      <div className={text}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="subtitle1">{content}</Typography>
      </div>
      <div className={imageWrapper}>
        <img src={media} alt="" />
      </div>
    </div>
  );
};

export default CertificationList;
