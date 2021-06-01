// USAGE:
/*
<MagnitTitle underlined={true} color="textPrimary" variant={'h2'}>Section: Hello world</MagnitTitle>
<MagnitTitle color="textSecondary" variant={'subtitle1'}>sub heading: Hello world</MagnitTitle>
*/

import { Typography } from "@material-ui/core";
const MagnitTitle = (props) => {
  return (
    <Typography
      style={
        Object.assign(
          { lineHeight:"1.3" }, // this might be default styles
          props.underlined && {
            // the underlined one
            textDecoration: "underline",
            textDecorationColor: "green",
          },
          props.style && props.style
        ) //styles sent from external file when using
      }
      {...props}
    >
      {props.children}
    </Typography>
  );
};

MagnitTitle.defaultProps = {
  text: "",
  color: "textPrimary",
  variant: "h2",
  underlined: false,
};

export default MagnitTitle;
