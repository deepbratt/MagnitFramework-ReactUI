import { Button, Typography } from "@material-ui/core";
import CustomButtonStyles from "./style";

const CustomButton = (props) => {
  const { root } = CustomButtonStyles;
  return (
    <Button
      variant={props.variant}
      style={{ borderRadius: props.radius }}
      className={`${root} ${props.styles}`}
      color="primary"
      size={props.size}
      onClick={() => props.handleClick()}
      fullWidth={props.fullWidth}
      {...props}
    >
      <Typography variant="button">{props.children}</Typography>
    </Button>
  );
};

CustomButton.defaultProps = {
  fullWidth: false,
  size: "medium",
  variant: "contained",
  radius: "5px",
  handleClick: () => console.log("buttonClicked"),
};

export default CustomButton;
