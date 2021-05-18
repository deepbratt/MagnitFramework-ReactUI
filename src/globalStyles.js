import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: "0px",
      padding: "0px",
      width: "100%",
      height: "100%",
      overflowX: "hidden"
    },
    html: {
      overflowX: "hidden",
    },
  },
});
