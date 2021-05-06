import { makeStyles } from "@material-ui/core/styles";

const FooterStyle = makeStyles((theme) => ({
 
  root: {
    backgroundColor: "#161C28",
    // padding: "40px 150px",
    // [theme.breakpoints.down("lg")]: {
    //   padding: "40px 100px",
    // },
    // [theme.breakpoints.down("md")]: {
    //   padding: "40px 70px",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   padding: "30px 40px",
    // },
    
  },
  rootRow:{
     padding: "40px 150px",
    [theme.breakpoints.down("lg")]: {
      padding: "40px 100px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "40px 70px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "30px 40px",
    },
    
  },

  logo: {},
  list: {
    "& > a": {
      textDecoration: "none",
    },
  },
  section: {
    "& > h3": {
      color: "#FFFFFF",
      fontSize:"20px"
    },
  },
  policy: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  contact: {
    display: "flex",
    "& > img": {
      margin: "10px",
      padding: "10px 12px",
      border: "1px solid white",
      borderRadius: "5px",
    },
  },
  head:{
    marginBottom:"15px",
    color:"#ffff"
  },
  footer:{
    borderTop:"1px solid gray",
  display:"flex" ,
  flexDirection:"row",
  padding: "40px 150px 10px",
  [theme.breakpoints.down("lg")]: {
    padding: "40px 100px 10px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "40px 70px 10px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "30px 40px 0px",
  },
},

}));

export default FooterStyle;
