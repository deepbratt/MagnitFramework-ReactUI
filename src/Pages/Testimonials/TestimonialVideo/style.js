import { makeStyles } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../../Theme/color.constants";
const breakpoints = createBreakpoints({});
const {Mirage,darkSilver} =Colors;
const useStyles = makeStyles((theme) => ({
  cardRoot:{
    // width:460,
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-evenly",
  height:"90%",
    position:"relative",
    padding:"1.3rem 1.6rem",
    borderRadius:".5rem",
    boxShadow:"0px 4px 60px rgba(0, 0, 0, 0.1)",
    margin:"1rem",
    textAlign:"left",
    "& .MuiCardContent-root": {
         padding: "1rem 0rem" 
    },
    [breakpoints.down("sm")]: {
        margin:"1rem 0rem",
       
      },
     
  },
  header:{
    padding: "16px 0px",
      "& .MuiCardHeader-avatar":{
          marginRight:".4rem"
      }
  },
  rating:{
    fontSize: "1.2rem",
"& .MuiRating-icon": {
    marginRight:".2rem"
},
[breakpoints.down("sm")]: {
  height:"auto",
  "& .MuiRating-icon": {
    marginRight:"-.1rem"
},
},
},
avatarImg:{
  [breakpoints.down("sm")]: {
    width:"45px"
    
  },
},
  cardImage:{
      // height:264,
    //   width:460,
    height:"auto",
      [breakpoints.down("sm")]: {
        height:"auto",
        
      },
  },
  cardTitle:{
    color:Mirage,
    textAlign:"left",
    fontSize:"20px",
    fontWeight:600,
    [breakpoints.down("sm")]: {
      fontSize:"16px",
      
    },
},
  cardpara:{
    color:darkSilver,
    textAlign:"left",
    fontSize:"18px",
    fontWeight:400,
    lineHeight:"29.34px",
    letterSpacing:".2"
},
carddate:{
    fontSize:"1rem",
    color:darkSilver,
    textAlign:"right",
    fontWeight:400,
    lineHeight:"24px",
    letterSpacing:".2",
    [breakpoints.down("sm")]: {
      fontSize:".8rem",
      marginBottom:".5rem"
    },
},
playBtn:{
    position:"absolute",
    top: "33%",
    left: "53%",
    transform: "translate(-3rem, 0.5rem)",
    "& > img ":{
      width:"70px"
    },
    [breakpoints.only("sm")]: {
      margin:".5rem 1.2rem",
      transform: "translate(-3rem, -0rem)",
      "& > img ":{
        width:"3.7rem"
      },
    },
    [breakpoints.only("xs")]: {
      margin:".5rem 1.2rem",
      transform: "translate(-3rem, -0rem)",
      "& > img ":{
        width:"3.5rem"
      },
    },
}

}));
  export default useStyles;