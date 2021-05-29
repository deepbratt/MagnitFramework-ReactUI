import { Button, Typography } from "@material-ui/core";
import CustomButtonStyles from "./style";
import Breakpoints from "../../Theme/theme.breakpoints";

const CustomButton = (props) => {
  const { root } = CustomButtonStyles;
  return (
    <Button
      variant={props.variant}
      style={{ borderRadius: props.radius }}
      className={`${root} ${props.styles}`}
      color={props.primary}
      size={props.size ? props.size : Breakpoints()}
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
  color: "primary",
  variant: "contained",
  radius: "5px",
  onClick: () => console.log("buttonClicked"),
};

export default CustomButton;
