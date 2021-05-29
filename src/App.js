import React, { Suspense } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "./globalStyles"
import { ThemeProvider } from "@material-ui/styles";
import { DarkTheme, NightTheme } from "./Theme/index";
import Route from "./routes"
import { Loader } from "./Components/loader";
import { CircularProgress, Grid, Typography } from "@material-ui/core";


const App = (props) => {
  useStyles()
  const { value } = props;
  // IF the value is Dark change it to Dark and vice versa
  const defaultTheme = value === "DARK" ? { ...DarkTheme } : { ...NightTheme };
  const [loading, setloading] = React.useState(true);
  React.useEffect(() => {
   setTimeout(() => {
    setloading(false)
   }, 2000);
  
   
  }, []);
  if (loading)
  {
    return ( 
       <Grid container justify="center" style={{ position: "absolute",
      left:"50%",
        top: "50%",
        transform: "translate(0%, -50%)",
        width:"100px",
        }}>
             <CircularProgress style={{color:"green"}}></CircularProgress>
             <Typography variant="h5" color="textPrimary">Loading...</Typography>
        </Grid>
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
