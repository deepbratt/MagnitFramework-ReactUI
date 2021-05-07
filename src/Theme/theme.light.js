import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";

export default createTheme({
  // Styles for Light Theme
  palette: createPalette({
    type: "light",
    primary: {
      main: "#2CD400",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2CD400",
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
    },
    text: {
      primary: "#000000",
      secondary: "#000000"
    }
  }),
});
