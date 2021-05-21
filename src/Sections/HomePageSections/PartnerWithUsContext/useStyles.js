import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
    cardSec: {
        display: "flex",
        width: "100%",
        flexFlow: "wrap",
        [breakpoints.only("md")]: {
          height: "430px",
        },
      },
      card: {
        height: "205px",
        width: "100%",
        margin: "10px",
        cursor: "pointer",
        boxShadow: "none",
      },
      content: {
        display: "flex",
        textAlign: "left",
      },
      grid: {
        paddingBottom: "40px",
        [breakpoints.down("md")]: {
          paddingBottom: "0px",
        },
      },
      
      devSec: {
        height: "100px",
        width: "50%",
        display: "flex",
        textAlign: "left",
  
      },
      supportSub: {
        borderRadius: "5px",
        height: "120px",
        width: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
 
      },
      para: {
        textAlign: "left",
        [breakpoints.down("md")]: {
          textAlign: "center",
          marginBottom: "20px",
          height: "250px",
        },
      },
}));





















