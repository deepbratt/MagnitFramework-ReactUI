import { Card, Typography } from "@material-ui/core";
import FactCardStyles from "./style";

const FactCard = ({ backColor, title, subtitle }) => {
  const { root, header, subText } = FactCardStyles();
  return (
    <Card
      className={root}
      style={{
        backgroundColor: backColor,
      }}
    >
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
