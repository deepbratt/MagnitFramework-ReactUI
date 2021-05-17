import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
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
      // MuiTab: {
      //   selected: {
      //     backgroundColor: "#1DBF73",
      //     border: "none",
      //   },
      // },
      MuiTab: {
        root: {
          "&$selected": {
            backgroundColor: "#2cd400",
            color: "#fff",
          },
        },

        wrapper: {
          border: "none",
        },
      },
      MuiButton: {
        contained: {
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0);",
          borderRadius: "0px",
          padding: "5px 40px",
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
          margin: "0px",

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
          padding: "5px 15px",

          borderRadius: "5px",
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
      // htmlFontSize: "10px",
      fontSize: 14,
      h1: {
        fontSize: "3.4375rem",
        fontWeight: 600,
        lineHeight: "71.77px",
      },
      h2: {
        fontSize: "2.1875rem",
        fontWeight: 600,
        lineHeight: "57.05px",
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "39.12px",
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "39.12px",
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: "30px",
      },
      h6: {
        fontSize: "1.125rem",
        fontWeight: 500,
        lineHeight: "29.34px",
      },
      subtitle1: {
        fontSize: "1.5rem",
        fontWeight: 300,
        lineHeight: "43.2px",
      },
      button: {
        fontSize: "1.25rem",
        textTransform: "none",
      },
      caption: {
        fontWeight: 400,
        fontSize: "1rem",
      },
      body1: {
        fontWeight: 400,
        size: "1.125rem",
        lineHeight: "29.34px",
      },
      body2: {
        fontWeight: 300,
        size: "1rem",
        lineHeight: "29.36px",
      },
    },
    shape: {
      borderRadius: "5px",
    },
  });
}
