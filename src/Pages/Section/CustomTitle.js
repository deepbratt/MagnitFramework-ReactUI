import { Typography } from "@material-ui/core";
import LayoutStyle from "./style";
import PropTypes from "prop-types";
import Size from "./Size";

// To use this component Title 
// 1: Pass text as a prop from HOC
// 2: Pass color prop to change the color of the Title only
// 3: Pass subTitleColor prop to change the color of the subTitle only
// 4: Pass underlined prop as bool true/false to toggle the green underline
// 5: Pass subTitle as a prop to show subtitle content 
// 6: In case of marginBottom in between title and subtitle, change it with className or style object to 20px
// 7: to overrride styles just use style object or className

const CustomTitle = (props) => {
  const { underlinedStyles, sectionHeader ,subHeader} = LayoutStyle();
  const borderBottom = props.underlined;
  return (
   <div className={sectionHeader}  {...props}>
      <Typography
      color="textPrimary"
      style={{ color: props.color, fontSize: Size(), lineHeight: 1.8 }}
      variant="h2"
      {...props}
    >
      <span className={borderBottom ? underlinedStyles : null}>
        {props.text}
      </span>
    </Typography>
    {props.subTitle && (
            <Typography
              className={subHeader}
              color="textSecondary"
              variant="subtitle1"
              style={{color: props.subTitleColor}}
            >
              {props.subTitle}
            </Typography>
          )}
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
