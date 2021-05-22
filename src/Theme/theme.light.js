import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";
import { Colors } from "./color.constants";
const { Mirage, darkSilver, Harlequin } = Colors;
export default createTheme({
  // Styles for Light Theme
  palette: createPalette({
    type: "light",

    primary: {
      main: Harlequin,
      contrastText: "#fff",
    },
    secondary: {
      main: Harlequin,
      dark: "#008732",
      contrastText: "#fff",
    },
    customColors: {
      peach: "#FFA24C",
    },
    error: {
      main: "#BD0043",
      contrastText: "#fff",
    },
    divider: "#D7D6D5",
    background: {
      paper: "#fff",
      default: "#ff0000",
    },
    typography: {
      fontFamily: ["Poppins', sans-serif"].join(","),
      textPrimary: "#151b27",
    },
    text: {
      primary: "#151b27",
      secondary: "#000000",
      textPrimary: "#151b27",
      textSecondary: "#717171",
    },
  }),
});
