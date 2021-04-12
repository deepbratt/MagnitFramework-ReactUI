import createMuiTheme from "@material-ui/core/styles/createMuiTheme";



// Object of our themes
export default function createTheme(options) {
  return createMuiTheme({
    ...options
  });
}
