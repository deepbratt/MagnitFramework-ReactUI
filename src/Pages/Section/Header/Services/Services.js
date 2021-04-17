import React from "react";
import { useStyles, THEME } from "./servicesStyles";
import {
  Typography,
  Card,
  CardContent,
  Paper,
} from "@material-ui/core";
import { MuiThemeProvider, useTheme } from "@material-ui/core/styles";
import App from "../../../../assets/app.svg"
import Profile from "../../../../assets/profile.svg" 
import Web from "../../../../assets/web.svg" 
import Digital from "../../../../assets/digital.svg" 

const Services = (props) => {
  const {value} = props
  const classes = useStyles();
  return (
    <>
    
      <Paper className={classes.root} elevation={0}>
      
          <section className={classes.serviceHeading}>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4" color="inherit">
              We Offer Quality Services and Solutions
            </Typography>
            <Typography paragraph={true} color="inherit">
              To start-ups and enterprises across the globe
            </Typography>
            </MuiThemeProvider>
          </section>
          <section className={classes.cardSec}>
            <Card className={classes.card}>
              <CardContent >
                <section  className={classes.devSec}>
                <section className={value === "LIGHT" ? classes.devSub : classes.dev}>
                <img alt= "icon" className={classes.profileIcon} src= {Profile} />
                </section>
                </section>
                <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Developer Hiring
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    We let you hire developers from our talent pool at
                    competitive prices with Dedicated hiring, Project based
                    hiring, and Hourly hiring options.
                  </Typography>
                  </MuiThemeProvider>
                </section>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <section className={classes.appSec}>
                <section className={value === "LIGHT" ? classes.appSub : classes.app} >
                <img alt= "icon" className={classes.appIcon} src= {App} />
                </section>
                    
                </section>
                <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    App Development
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    We develop and design applications for iOS, android and
                    windows devices using our expertise in native and hybrid
                    technologies
                  </Typography>
                  </MuiThemeProvider>
                </section>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <section className={classes.webSec}>
        
                <section className={value === "LIGHT" ? classes.webSub : classes.web}>
                <img alt= "icon" className={classes.webIcon} src= {Web} />
                </section>
                </section>
                <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Web Development
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    We offer agile and cost-efficient web development solutions
                    to give you a peerless experience in creating a strong
                    online footprint.
                  </Typography>
                  </MuiThemeProvider>
                </section>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <section className={classes.digitalSec}>
                <section className={value === "LIGHT" ? classes.digitalSub : classes.digital} >
                <img alt= "icon" className={classes.digitalIcon} src= {Digital} />
                </section>
               
                </section>
                <section>
                <MuiThemeProvider theme={THEME}>
                  <Typography variant="h5" color="inherit">
                    Digital Marketing
                  </Typography>
                  <Typography paragraph={true} color="inherit">
                    We provide integrated digital marketing solutions with the
                    strategy and approach that is best suited to grow your
                    business.
                  </Typography>
                  </MuiThemeProvider>
                </section>
              </CardContent>
            </Card>
          </section>
      </Paper>
     
     
    </>
  );
};

export default Services;
