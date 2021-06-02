import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import PointBadge from ".";
import PointBadgeStyles from "./style";

const PointList = ({ horizontal, data, lgBreakpoint = 4 }) => {
  const { hover } = PointBadgeStyles();
  let breakpoint = 4;
  if (horizontal) {
    breakpoint = 6;
  }
  return (
    <Grid container>
      {data &&
        data.map((item, index) => (
          <Grid
            style={{ marginBottom: "20px" }}
            className={horizontal ? null : hover}
            key={index}
            item
            xs={12}
            md={breakpoint}
            lg={lgBreakpoint}
          >
            <PointBadge horizontal={horizontal} data={item} />
          </Grid>
        ))}
    </Grid>
  );
};

PointList.defaultProps = {
  horizontal: false,
};

PointList.propTypes = {
  horizontal: PropTypes.bool,
  data: PropTypes.array.isRequired,
};

export default PointList;
