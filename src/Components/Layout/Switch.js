import React from "react";
import { switcheroo } from "../../Redux/Actions/themeActions/action";
import Switch from "@material-ui/core/Switch";
import { connect, useDispatch } from "react-redux";

const Button = (props) => {
  const { value } = props;
  const dispatch = useDispatch();
  return (
    <>
      <Switch
        onChange={() =>
          dispatch(switcheroo(value === "LIGHT" ? "DARK" : "LIGHT"))
        }
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.themeReducer.lightThemeEnabled,
});

export default connect(mapStateToProps)(Button);
