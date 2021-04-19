import React from 'react'
import { useStyles, THEME } from "./solutionStyles";
import {
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { MuiThemeProvider} from "@material-ui/core/styles";
import * as icons from "../../Components/icons/icon.constants"

const SecondSec = () => {
    const classes = useStyles()
    const {cardSec,card,devSec,profileIcon} = classes
    const {deliveryIcon,portalIcon,managementIcon,vendorIcon,serviceIcon,groceryIcon} = icons
    return (
        <>
              <section className={cardSec}>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src = {deliveryIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Food Delivery App
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src = {portalIcon}  />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Job portal
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={managementIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Learn Management
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={vendorIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Multiple Vendors
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={serviceIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
            
              On demand Service
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={groceryIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Online Grocery
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
       
      
      </section>
        </>
    )
}

export default SecondSec
