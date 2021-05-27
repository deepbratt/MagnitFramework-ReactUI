import { Colors } from "../../Theme/color.constants"

const { darkJungleGreen } = Colors;
const ErrorBoundaryStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    top: "0",
    background: "#f7f7f7",
    padding: "10px",
  },
  logo: {
    width: "100px",
    height: "auto",
  },
  errorImage: {
    width: "500px",
    height: "auto",
    margin: "auto",
    marginTop: "100px",
    marginBottom:"10px"
  },
  textWrapper: {
    padding: "20px",
    textAlign: "center",
    marginBottom: "20px",
  },
  errorDetails: {
    whiteSpace: "pre-wrap",
  },
  footerWrapper:{
    display:"flex",
    justifyContent:"center",
    padding:"20px",
    backgroundColor: darkJungleGreen,
  }
};

export default ErrorBoundaryStyles;
