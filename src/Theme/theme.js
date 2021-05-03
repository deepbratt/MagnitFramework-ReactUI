import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// Object of our themes
export default function createTheme(options) {
  return createMuiTheme({
    ...options,
    overrides: {
      MuiGrid: {
        "spacing-xs-3": {
          "& > .MuiGrid-item": {
            padding: "0px",
          },
        },
      },
      MuiButton: {
        contained: {
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0);",
        },
      },
      MuiInputBase: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
      MuiCard: {
        root: {
          borderRadius: 0,
        },
      },
      MuiPaper: {
        elevation1: {
          boxShadow: "box-shadow: 0px 0px 0px 0px rgba(0,0,0,0)",
        },
      },
      MuiAccordion: {
        root: {
          marginTop: "20px",
          position: "inherit",
          "&::before": {
            height: "0",
          },
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
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      button: {
        fontSize: "1.25rem",
        textTransform: "none",
      },
      caption: {
        fontWeight: 400,
        fontSize: "1rem",
        color: "#FFFFFF",
      },
      body1: {
        fontWeight: 500,
        size: "1rem",
        color: "#FFFFFF",
      },
      body2: {
        fontSize: "1rem",
        color: "#151B27",
      },
    },
    shape: {
      borderRadius: "5px",
    },
  });
}
