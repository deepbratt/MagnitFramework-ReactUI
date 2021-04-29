import React from 'react'
import { useStyles, THEME } from "./solutionStyles";
import {
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { MuiThemeProvider} from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants"

const SolutionsLastSection = () => {
    const classes = useStyles()
    const {cardSec,card,devSec,profileIcon} = classes
    const {realEstateIcon,rideIcon,spaIcon,userIcon,hospIcon,travelIcon} = icons
    return (
        <>
              <section className={cardSec}>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src = {realEstateIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Real Estate
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src = {rideIcon}  />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Ride Sharing
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={spaIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Spa/salon
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={userIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Social Media
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={hospIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Hospitality
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={travelIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Travel & Tourism
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
       
      
      </section>
        </>
    )
}

export default SolutionsLastSection
