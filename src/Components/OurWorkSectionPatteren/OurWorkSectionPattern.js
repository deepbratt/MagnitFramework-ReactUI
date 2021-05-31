import { OurWorkPatternStyles } from "./ourWorkSectionPatterenStyles";
import BackGroudnPatternLeft from "../../assets/OurBlogs/LatestBlogPattern.png";
import BackGroudnPatternRight from "../../assets/OurBlogs/LatestBlogPatternRight.png";
import { Grid, Hidden } from "@material-ui/core";
const { leftPattern, rightPattern } = OurWorkPatternStyles;

export const ourWorkSectionPatterns = [
  {
    image: (
      <Hidden smDown>
        <Grid
          className={leftPattern}
          style={{
            position: "absolute",
            left: "-5%",
            bottom: "-10%",
            zIndex: 0,
          }}
          item
          xs={3}
        >
          <img width="100%" height="100%" src={BackGroudnPatternLeft} alt="" />
        </Grid>
      </Hidden>
    ),
    styles: leftPattern,
  },
  {
    image: (
      <Hidden smDown>
        <Grid
          className={`${rightPattern}`}
          style={{ position: "absolute", right: "-10%", top: "-10%" }}
          item
          xs={4}
        >
          <img width="100%" height="100%" src={BackGroudnPatternRight} alt="" />
        </Grid>
      </Hidden>
    ),
    styles: rightPattern,
  },
];
