import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const useStyles = makeStyles((theme) => ({
    root:{
        height:"100vh",
        padding:"2rem",
        [theme.breakpoints.only("xl")]: {
            height:"auto",
          },
    },
Img:{
    width:"470px",
    [theme.breakpoints.only("xl")]: {
        width:"510px",
      },
      [theme.breakpoints.only("lg")]: {
        width:"490px",
      },
    [theme.breakpoints.down("sm")]: {
        width:"300px",
      },
},
head:{
    margin:"2.5rem 0rem 0rem 0rem",
    color:"rgba(21, 27, 39, 1)"
},
paragraph:{
    padding: ".5rem 23rem",
    color:"#737373",
    [theme.breakpoints.down("sm")]: {
        padding: "0rem",
      },
      [theme.breakpoints.only("md")]: {
        padding: ".5rem 6rem",
      },
},
HomeBtn:{
    textAlign: "center", color: "#fff",
    fontSize:"16px",
    padding: ".3rem 2rem",
}



}));
export default useStyles;