import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import { DarkTheme, NightTheme } from "./Theme/index";
import Home from "./Pages/Home"


const App = (props) => {
  const { value } = props;
  // IF the value is Dark change it to Dark and vice versa
  const defaultTheme = value === "DARK" ? { ...DarkTheme } : { ...NightTheme };

  return (
    <ThemeProvider theme={defaultTheme}>
     <Paper  style= {{height: "100vh"}} elevation= {0} >
       <Home {...props}/>
     </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(App);
