import { createMuiTheme } from "@material-ui/core/styles";
/*
banner: h1
section heading: h2
special heading: h3
fontsmall: body2
fontbig: body1
card title: h4

xl:
banner: 3.4rem / 55px
section heading: 2.2rem / 35px
special heading: 2rem / 30px
fontsmall: 1rem (16px wala)
fontbig: 1.125rem (18px wala)
card title: 1.375rem / 22px
button text: 1.25 / 20px
container padding: 9rem / 150px

large:
banner: 2.5rem
special heading: 2rem
fontsmall: 1rem (16px wala)
fontbig: 1.125rem (18px wala)
card title: 1.375rem / 22px
button text: 1.25 / 20px
padding: 5rem/ 150px

medium
banner: 2rem / 48px
special heading: 1.5/ 30px
fontsmall: 0.85rem (16px wala)
fontbig: 1rem (18px wala)
card title: 1.375rem / 22px
button text: 1.25 / 20px
padding: 2rem
*/

const theme = createMuiTheme();
// banner heading
theme.typography.h1 = {
  fontFamily: "Poppins",
  fontSize: "3.2375rem",
  fontWeight: 600,
  lineHeight: "71.77px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
    lineHeight: "55px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
    lineHeight: "42px",
  },
};

// section heading
theme.typography.h2 = {
  fontFamily: "Poppins",
  fontSize: "2.0875rem",
  fontWeight: 600,
  lineHeight: "57.05px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.775rem",
    lineHeight: "35px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.525rem",
    lineHeight: "30px",
  },
};

// special headings
theme.typography.h3 = {
  fontFamily: "Poppins",
  fontSize: "1.8rem",
  fontWeight: 600,
  lineHeight: "39.12px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.055rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.025rem",
  },
};

// cards small headings/title
theme.typography.h4 = {
  fontFamily: "Poppins",
  fontSize: "1.275rem",
  fontWeight: 600,
  lineHeight: "39.12px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.05rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.825rem",
    lineHeight: "34px",
  },
};

theme.typography.h5 = {
  fontFamily: "Poppins",
  fontSize: "1.25rem", // 20px
  fontWeight: 500,
  lineHeight: "30px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.125rem", // 18px
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem", // 16rem
  },
};

theme.typography.h6 = {
  fontFamily: "Poppins",
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
  },
};

// 18px
theme.typography.subtitle1 = {
  fontFamily: "Poppins",
  fontSize: "1.275rem", // 22px
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.025rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

theme.typography.subtitle2 = {
  fontFamily: "Poppins",
  fontSize: "1.125rem", // 20px
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem", //14px
    lineHeight: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem", //14px
    lineHeight: "20px",
  },
};

// 18px text
theme.typography.body1 = {
  fontFamily: "Poppins",
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
};

// 16px
theme.typography.body2 = {
  fontFamily: "Poppins",
  fontSize: "1rem", // 16px
  fontWeight: 300,
  lineHeight: "29.36px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.75rem",
    lineHeight: "22px",
  },
};

theme.typography.caption = {
  fontFamily: "Poppins",
  fontSize: "1rem", // 16px
  fontWeight: 500,
  lineHeight: "29.34px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.75rem",
    lineHeight: "25px",
  },
};

theme.typography.button = {
  fontFamily: "Poppins",
  fontSize: "1.025rem", // 18px
  fontWeight: 500,
  lineHeight: "32.34px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.8rem", // 16px
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.65rem", // 16px
  },
};

export default theme;
