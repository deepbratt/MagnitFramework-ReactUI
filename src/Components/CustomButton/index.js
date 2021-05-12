import { Button } from "@material-ui/core";
import CustomButtonStyles from './style';

const CustomButton = (props) => {
  const { root } = CustomButtonStyles;
  return (
    <Button
      variant={props.variant}
      className={`${root} ${props.style}`}
      color="primary"
      size={props.size}
      onClick={() => props.handleClick()}
      fullWidth={props.fullWidth}
      {...props}
    >
      {props.text}
    </Button>
  );
};

CustomButton.defaultProps = {
  fullWidth: false,
  size: "medium",
  variant: "contained",
  handleClick: () => console.log("buttonClicked"),
};

export default CustomButton;
