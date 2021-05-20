import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: "3.4375rem",
  fontWeight: 600,
  lineHeight: "71.77px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
};

theme.typography.h2 = {
  fontSize: "2.1875rem", // 35px
  fontWeight: 600,
  lineHeight: "57.05px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.875rem", // 30px
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.625rem", // 26px
    lineHeight: "30px",
  },
};

theme.typography.h3 = {
  fontSize: "1.5rem",
  fontWeight: 600,
  lineHeight: "39.12px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.5rem",
  fontWeight: 600,
  lineHeight: "39.12px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.25rem",
  fontWeight: 500,
  lineHeight: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
};

theme.typography.subtitle1 = {
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
};

theme.typography.subtitle2 = {
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
};

theme.typography.body1 = {
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
};

theme.typography.body2 = {
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
};

theme.typography.caption = {
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
};

theme.typography.button = {
  fontSize: "1.25rem", // 20px
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem", // 16px
  },
};

export default theme;
