import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";
// <<<<<<< HEAD
// import { grey, amber, purple } from "@material-ui/core/colors";

// export default createTheme({
//   palette: createPalette({
//     type: "light",
//     primary: {
//       main: "#1DBF73",
//     },
//     secondary: purple,
//     text: {
//       primary: "#000000",
//     },
// =======
import { grey } from "@material-ui/core/colors";

export default createTheme({
  // Styles for Light Theme
  palette: createPalette({
    type: "light",
    primary: {
      main: "#1DBF73",

      contrastText: grey,
    },
    secondary: {
      main: "#1dbf73",
      dark: "#008732",
      contrastText: "#fff",
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
  }),
});
