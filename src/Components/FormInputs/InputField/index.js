import TextField from "@material-ui/core/TextField";
import LayoutStyle from "./style";

const InputField = ({
  placeholder,
  helperText,
  multiline,
  fullWidth,
  variant,
  size,
  rows,
  rowsMax,
  error,
}) => {
  const { root } = LayoutStyle();
  return (
    <TextField
      className={root}
      placeholder={placeholder}
      variant={variant}
      multiline={multiline}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      rows={rows}
      size={size}
      rowsMax={rowsMax}
    />
  );
};

InputField.defaultProps = {
  size: "small",
  error: false,
  helperText: "",
  fullWidth: true,
  variant: "outlined",
  rows: "3",
  rowsMax: "3",
};

export default InputField;
