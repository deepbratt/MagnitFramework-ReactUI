import React from 'react'
import { useStyles, THEME } from "./solutionStyles";
import {
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { MuiThemeProvider} from "@material-ui/core/styles";
import * as icons from "../../assets/icons/icon.constants"

const SolutionsPrimarySection = () => {
    const classes = useStyles()
    const {cardSec,card,devSec,profileIcon} = classes
    const {chatIcon,classifiedIcon,fundIcon,designIcon,datingIcon,fitnessIcon} = icons
    return (
        <>
              <section className={cardSec}>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src = {chatIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Chat App
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src = {classifiedIcon}  />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Classified App
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={fundIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Croud funding
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={designIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Product Design
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={datingIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Dating App
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
        <Card className={card}>
          <CardContent >
            <section  className={devSec}>
          
            <img alt= "icon" className={profileIcon} src={fitnessIcon} />
            </section>
            <section>
            <MuiThemeProvider theme={THEME}>
              <Typography variant="h5" color="inherit">
              Fitness App
              </Typography>
             
              </MuiThemeProvider>
            </section>
          </CardContent>
        </Card>
       
      
      </section>
        </>
    )
}

export default SolutionsPrimarySection
