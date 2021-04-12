import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";
import { grey, amber } from "@material-ui/core/colors";


// Styles for Grey Theme
export default createTheme({
  palette: createPalette({
    type: "dark",
    primary: grey,
    text: {
      primary: amber[800]
    }
  })
});
