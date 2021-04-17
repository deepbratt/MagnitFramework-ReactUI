import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";
import { grey, amber, purple } from "@material-ui/core/colors";

export default createTheme({
  palette: createPalette({
    type: "light",
    primary: {
      main: "#1DBF73",
    },
    secondary: purple,
    text: {
      primary: "#000000",
    },
  }),
});
