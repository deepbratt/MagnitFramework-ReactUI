import React, { Suspense } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./globalStyles"
import { ThemeProvider } from "@material-ui/styles";
import { DarkTheme, NightTheme } from "./Theme/index";
import Route from "./routes"
import { Loader } from "./Components/loader";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

import { Colors } from "../src/Theme/color.constants";
const { Harlequin } = Colors;
const App = (props) => {
  useStyles()
  const { value } = props;
  // IF the value is Dark change it to Dark and vice versa
  const defaultTheme = value === "DARK" ? { ...DarkTheme } : { ...NightTheme };
  const [loading, setloading] = React.useState(true);
  React.useEffect(() => {
    setloading(false);
  }, []);
  if (loading)
  {
    return ( 
      //  <Grid container justify="center" style={{ position: "absolute",
      // left:"50%",
      //   top: "50%",
      //   transform: "translate(0%, -44%)",
      //   width:"100px",
      //   }}>
      //        <CircularProgress style={{color:Harlequin}}></CircularProgress>
      //        <Typography variant="h5" color="textPrimary">Loading...</Typography>
      //   </Grid>
      <Loader color={Harlequin} styles="h4"/>
    );
  }
   else {
   return (
    <ThemeProvider theme={defaultTheme}>
     <Paper  style= {{height: "100vh"}} elevation= {0} >
      <Suspense fallback={<Loader/>}>
       <Route />
       </Suspense>
     </Paper>
    </ThemeProvider>
  );}
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(App);
