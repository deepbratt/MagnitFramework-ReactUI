import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";
import { grey, amber , purple} from "@material-ui/core/colors";

export default createTheme({

  // Styles for Light Theme
  palette: createPalette({
    type: "light",
    primary: amber,
    secondary: purple,
    
    text: {
      primary: grey[800]
    }

  })
});
