import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { BoxedWidth, FullWidth } from "../Layout/constants";
import { ToggleType } from "../../Redux/Actions/layoutActions";
import CustomButton from "../CustomButton";

const LayoutSwiper = ({ layoutType }) => {
  const dispatch = useDispatch();

  return (
    <CustomButton
      data-test="layoutSwiperComponent"
      variant="contained"
      color="primary"
      onClick={() =>
        layoutType === BoxedWidth
          ? dispatch(ToggleType(FullWidth))
          : dispatch(ToggleType(BoxedWidth))
      }
    >
      Toggle {layoutType}
    </CustomButton>
  );
};

LayoutSwiper.propTypes = {
  layoutType: PropTypes.oneOf(["lg", false]).isRequired,
};

export default LayoutSwiper;
