import { Typography } from "@material-ui/core";
import LayoutStyle from "./style";

const SectionHeading = ({ header }) => {
  const { headerClass, underlinedStyles } = LayoutStyle();
  const titleText = header.split("/");
  const normalTitle = titleText[0];
  const underlinedTitle = titleText[1];
  return (
    <Typography className={headerClass} color="textPrimary" variant="h2">
      {normalTitle}
      <span className={underlinedStyles}>{underlinedTitle}</span>
    </Typography>
  );
};

SectionHeading.defaultProps = {
  header: "",
};

export default SectionHeading;
