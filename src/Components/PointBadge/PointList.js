import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import PointBadge from ".";
import PointBadgeStyles from "./style";

const PointList = ({ horizontal, data, lgBreakpoint = 4 , alt}) => {
  const { hover } = PointBadgeStyles();
  let breakpoint = 4;
  if (horizontal) {
    breakpoint = 6;
  }
  return (
    <Grid container spacing={1}>
      {data &&
        data.map((items, index) => (
          <Grid
            style={{ marginBottom: "20px" }}
            className={horizontal ? null : hover}
            key={index+"pointlist"}
            item
            xs={12}
            md={breakpoint}
            lg={lgBreakpoint}
          >
            <PointBadge alt={alt} horizontal={horizontal} data={items} />
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
