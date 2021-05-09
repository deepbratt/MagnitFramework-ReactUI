import { Button } from "@material-ui/core";

const CustomButton = ({
  text,
  variant,
  fullWidth,
  style,
  size,
  handleClick,
}) => {
  const { root } = CustomButton;
  return (
    <Button
      variant={variant}
      className={`${root} ${style}`}
      color="primary"
      size={size}
      onClick={() => handleClick()}
      fullWidth={fullWidth}
    >
      {text}
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
