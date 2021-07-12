import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bannerClass: {
    textAlign: "center",
    margin: "auto",
    height:"50vh",
    width:"100vw"
  },

  container: {
    background: "white",
    minHeight: "50vh",
    width: "100%",
    textAlign:"left"
  },
}));
