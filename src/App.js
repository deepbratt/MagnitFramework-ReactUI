import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { DarkTheme, NightTheme } from "./Theme/index";
import Switch from "./Components/Layout/Switch";

const App = (props) => {
  const { value } = props;
  // IF the value is Dark change it to Dark and vice versa
  const defaultTheme = value === "DARK" ? { ...DarkTheme } : { ...NightTheme };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper style={{ height: "100vh" }} elevation={8}>
        <Grid style = {{display: "flex", flexDirection: "column", marginTop: "10px"}}
        container justify="center">
          <Button variant="contained" color="secondary">
            Theme
          </Button>
          <Button variant="contained" color="primary">
            Theme
          </Button>
          <Switch />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(App);
