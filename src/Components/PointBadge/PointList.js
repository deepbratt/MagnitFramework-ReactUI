import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import PointBadge from ".";

const PointList = ({ horizontal, data }) => {
  let breakpoint = 4;
  if (horizontal) {
    breakpoint = 6;
  }
  return (
    <Grid container>
      {data &&
        data.map((item, index) => (
          <Grid item xs={12} md={breakpoint}>
            <PointBadge key={index} horizontal={horizontal} data={item} />
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
