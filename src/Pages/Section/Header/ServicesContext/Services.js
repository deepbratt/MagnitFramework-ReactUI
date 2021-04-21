import React from "react";
import { useStyles, THEME } from "./servicesStyles";
import {
  Typography,
  Card,
  CardContent,
  Paper,
} from "@material-ui/core";
import { MuiThemeProvider} from "@material-ui/core/styles";
import * as Icons from "../../../../Components/icons/icon.constants"
const Services = (props) => {
  const {value} = props
    const classes = useStyles()
  const {root,serviceHeading,cardSec,card, devSec,devSub, dev,appSec,appSub,app,webSub,webSec,web,digital,digitalSec,digitalSub} = classes
  const {App,Profile,Web,Digital}= Icons
   return ( <>
    
    <Paper className={root} elevation={0}>
      
      <section className={serviceHeading}>
      <MuiThemeProvider theme={THEME}>
        <Typography variant="h4" color="inherit">
          We Offer Quality Services and Solutions
        </Typography>
        <Typography paragraph={true} color="inherit">
          To start-ups and enterprises across the globe
        </Typography>
        </MuiThemeProvider>
      </section>
      <section className={cardSec}>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
            <section className={value === "LIGHT" ? devSub : dev}>
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
        <Card className={card}>
          <CardContent>
            <section className={appSec}>
            <section className={value === "LIGHT" ? appSub : app} >
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
        <Card className={card}>
          <CardContent>
            <section className={webSec}>
    
            <section className={value === "LIGHT" ? webSub : web}>
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
        <Card className={card}>
          <CardContent>
            <section className={digitalSec}>
            <section className={value === "LIGHT" ? digitalSub : digital} >
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
