import { Typography } from "@material-ui/core";
import LayoutStyle from "./style";
import PropTypes from "prop-types";
import Size from "./Size";
const CustomTitle = (props) => {
  const { underlinedStyles, sectionHeader ,subHeader} = LayoutStyle();
  const borderBottom = props.underlined;
  return (
   <div className={sectionHeader}  {...props}>
      <Typography
      color="textPrimary"
      style={{ color: props.color, fontSize: Size() }}
      variant="h2"
      {...props}
    >
      <span className={borderBottom ? underlinedStyles : null}>
        {props.text}
      </span>
      {props.subTitle && (
            <Typography
              className={subHeader}
              color="textSecondary"
              variant="subtitle1"
              style={{color: props.color}}
            >
              {props.subTitle}
            </Typography>
          )}
    </Typography>
   </div>
  );
};

CustomTitle.defaultProps = {
  text: "",
};
CustomTitle.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  subTitle: PropTypes.string,
  underlined: PropTypes.bool,
};

export default CustomTitle;
