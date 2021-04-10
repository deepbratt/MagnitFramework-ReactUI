import React from "react";
import { switcheroo } from "../../Redux/Actions/themeActions/action";
import Switch from "@material-ui/core/Switch";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types"

const Button = (props) => {
  const { value } = props;
  const dispatch = useDispatch();
  return (
    <>
    <div >
    <Switch
        className= "switch"
        onChange={() =>
          dispatch(switcheroo(value === "LIGHT" ? "DARK" : "LIGHT"))
        }
      />
    </div>
     
    </>
  );
};

Button.propTypes = {
  emitEvent: PropTypes.func
}

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Button);
