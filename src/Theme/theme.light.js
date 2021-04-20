import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";
import { grey } from "@material-ui/core/colors";

export default createTheme({
  // Styles for Light Theme
  palette: createPalette({
    type: "light",
    primary: {
      main: '#F3FDFE',
      dark: '#143C8C',
      contrastText: grey
    },
    secondary: {
      main: '#1dbf73',
      dark: '#008732',
      contrastText: '#fff',
    },
    error: {
      main: '#BD0043',
      contrastText: '#fff',
    },
    divider: '#D7D6D5',
    background: {
      paper: '#fff',
      default: "#ff0000"
    },
    typography: {
      fontFamily: [
        "Poppins', sans-serif"
      ].join(','),
    }

  }),
});
