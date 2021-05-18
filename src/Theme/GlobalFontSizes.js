import Breakpoints from "./theme.breakpoints";
const GlobalFontSize = {
  H1: {
    fontSize: "3.4375rem",
    fontWeight: 600,
    lineHeight: "71.77px",
    [Breakpoints() === "small"]: {
      fontSize: "3.4375rem",
      lineHeight: "71.77px",
    },
  },
  H2: {
    fontSize: "2.1875rem",
    fontWeight: 600,
    lineHeight: "57.05px",
    [Breakpoints() === "small"]: {
      fontSize: "1.5rem",
      lineHeight: "65px",
    },
  },
  H3: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: "39.12px",
  },
  H4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: "39.12px",
  },
  H5: {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: "30px",
  },
  H6: {
    fontSize: "1.125rem",
    fontWeight: 500,
    lineHeight: "29.34px",
  },
  Subtitle1: {
    fontSize: "1.5rem",
    fontWeight: 300,
    lineHeight: "43.2px",
  },
  Button: {
    fontSize: "1.25rem",
    textTransform: "none",
  },
  Caption: {
    fontWeight: 400,
    fontSize: "1rem",
  },
  Body1: {
    fontWeight: 400,
    size: "1.125rem",
    lineHeight: "29.34px",
  },
  Body2: {
    fontWeight: 300,
    size: "1rem",
    lineHeight: "29.36px",
  },
};

export default GlobalFontSize;
