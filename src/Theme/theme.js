// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { createMuiTheme } from "@material-ui/core";
import { Colors } from "./color.constants";
import theme from "./GlobalFontSizes";
// const breakpoints = createBreakpoints({});
// Object of our themes
const { Harlequin } = Colors;
// const { H2 } = GlobalFontSize;

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
            backgroundColor: Harlequin,
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
        sizeLarge: {
          padding: "5px 40px",
        },
        sizeSmall: {
          padding: "5px 20px",
        }
      },
      MuiInputLabel: {
        root: {
          fontSize: 16,
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
      fontSize: 14,
      h1: theme.typography.h1,
      h2: theme.typography.h2,
      h3: theme.typography.h3,
      h4: theme.typography.h4,
      h5: theme.typography.h5,
      h6: theme.typography.h6,
      subtitle1: theme.typography.subtitle1,
      subtitle2: theme.typography.subtitle2,
      button: theme.typography.button,
      caption: theme.typography.caption,
      body1: theme.typography.body1,
      body2: theme.typography.body2,
    },
    shape: {
      borderRadius: "5px",
    },
  });
}
