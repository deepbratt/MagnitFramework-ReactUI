import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Object of our themes
export default function createTheme(options) {
  return createMuiTheme({
    ...options,
    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: "box-shadow: 0px 0px 0px 0px rgba(0,0,0,0)",
        },
      },
      MuiAccordion: {
        root: {
          marginTop: "20px",
          position: "inherit",
        },
      },
      MuiAccordionSummary: {
        root: {
          backgroundColor: "rgba(141, 152, 191, 0.1)",
          marginBottom: "20px",
          padding: "15px 45px",
          borderRadius: "10px",
        },
      },
      MuiAccordionDetails: {
        root: {
          textAlign: "left",
        },
      },
    },
    typography: {
      fontFamily: "'Poppins', 'Arial', sans-serif",
      h2: {
        fontSize: "2.1875rem",
        fontWeight: 600,
        lineHeight: "52.5px",
      },
      button: {
        fontSize: "1.25rem",
        textTransform: "none",
      },
      caption: {
        fontWeight: 500,
        fontSize: "1.125rem",
      },
      body: {
        color: "#383B47",
      },
    },
    shape: {
      borderRadius: "5px",
    },
  });
}
