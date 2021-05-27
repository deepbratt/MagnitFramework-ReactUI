import { Typography } from "@material-ui/core";
import LayoutStyle from "./style";

const SectionHeading = ({ header, color }) => {
  const { underlinedStyles } = LayoutStyle();
  const titleText = header.split("/");
  const normalTitle = titleText[0];
  const underlinedTitle = titleText[1];
  return (
    <Typography color="textPrimary" style={{ color: color }} variant="h2">
      {normalTitle}
      <span className={underlinedStyles}>{underlinedTitle}</span>
    </Typography>
  );
};

SectionHeading.defaultProps = {
  header: "",
};

export default SectionHeading;
