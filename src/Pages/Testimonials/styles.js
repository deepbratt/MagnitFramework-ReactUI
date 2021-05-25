import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";
const {  Harlequin,Mirage,DoveGray } = Colors;
const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "0",
        backgroundColor: "transparent",
        background: `linear-gradient(-181.96deg , ${ Harlequin} -98.18%, rgba(255, 255, 255, 0) 85.96%)`,
    backgroundBlendMode: "multiply"
      },
      reviewSlider: {
        position: "relative",
        "& > img": {
          position: "absolute",
        },
      },
      textColor:{
color:Mirage,
      },
      imageWrapper: {
        position: "relative",
        margin: "10px 30px 30px 30px",
        "& > img": {
          width: "390px",
          [theme.breakpoints.down("sm")]: {
            width: "250px"
          },
        },
      },
      content: {
        display: "flex",
        color:Mirage,
        flexDirection: "column",
        textAlign: "left",
        marginTop:"10.5rem",
        margin: "50px",
        // color: "black",
        "& > h1": {
            marginBottom:".1rem",
          // [theme.breakpoints.down("sm")]: {
          //   // fontSize: "1.5rem",
          // },
        },
        [breakpoints.down("sm")]: {
            marginTop:"5rem",
            
          },
      },
      cardRoot:{
        // padding:" 0rem 3rem",
        display: "flex",
        flexWrap:"wrap",
        [breakpoints.down("sm")]: {
          padding:'.4rem 0rem',
       },
      },
      cardSec: {
        // padding: "0px",
        marginTop: "6rem",
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        [breakpoints.down("sm")]: {
          flexDirection: "column",
          textAlign: "center",
        },
        textAlign: "left",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      },
      paragraph: {
        width: "80%",
        textAlign:"center",
        marginTop: "10px",
        color: DoveGray,
        [breakpoints.down("xs")]: {
          marginTop: "5px",
        },
      },
    
      underlined: {
        position: "relative",
        color:Mirage,
        zIndex: 1,
        marginLeft: "10px",
        "&:after ": {
          position: "absolute",
          height: "17px",
          content: '""',
          zIndex: -1,
          width: "14.2rem",
          right: 0,
          backgroundColor: Harlequin,
          bottom: "5px",
          [breakpoints.down("sm")]: {
            height: "11px",
            maxWidth: "8.2rem"
          },
        },
      },
      flex:{
          margin:"3rem 0rem 5rem 0rem"
      },
      seeMore:{
        padding: ".3rem 1rem",
 }
}));
export default useStyles;