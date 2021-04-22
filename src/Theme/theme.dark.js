import createTheme from "./theme";
import createPalette from "@material-ui/core/styles/createPalette";



// Styles for Grey Theme
export default createTheme({
  palette: createPalette({
    type: "dark",
    primary: {
      main: '#f50057',
      dark: '#008732',
      contrastText: '#151B27',
    },
    text: {
      primary:'#151B27',
     
    }
  })
});
