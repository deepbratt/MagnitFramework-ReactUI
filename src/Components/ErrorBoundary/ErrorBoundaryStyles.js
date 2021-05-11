const ErrorBoundaryStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  },
  textWrapper: {
    padding: "20px",
    textAlign: "center",
    marginBottom: "20px",
  },
  errorDetails: {
    whiteSpace: "pre-wrap",
  },
};

export default ErrorBoundaryStyles;
