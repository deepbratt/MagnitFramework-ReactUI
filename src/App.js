import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { connect } from "react-redux";
import Routes from "./routes"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { DarkTheme, NightTheme } from "./Theme/index";
import Switch from "./Components/themeToggle/Switch";

const App = (props) => {
  const { value } = props;
  // IF the value is Dark change it to Dark and vice versa
  const defaultTheme = value === "DARK" ? { ...DarkTheme } : { ...NightTheme };

  return (
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(App);
