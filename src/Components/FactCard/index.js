import { Card, Typography } from "@material-ui/core";
import FactCardStyles from "./style";

const FactCard = ({ backColor, icon, title, subtitle }) => {
  const { root, header, subText } = FactCardStyles();
  return (
    <Card
      className={root}
      style={{
        backgroundColor: backColor,
      }}
    >
      {icon && <img height="60px" src={icon} alt="" />}
      <Typography className={header} variant="h2">
        {title}
      </Typography>
      <Typography className={subText} variant="h3" gutterBottom>
        {subtitle}
      </Typography>
    </Card>
  );
};

FactCard.defaultProps = {
  backColor: "#FFF6E4",
  title: "",
  subtitle: "",
};

export default FactCard;
