import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import LayoutStyle from "./style";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import { ToggleType } from "../../Redux/Actions/layoutActions";

const Layout = ({ children }) => {
  const { root, paper } = LayoutStyle();
  // const [layoutType, setLayoutType] = useState();
  const layoutType = useSelector((state) => {
    return state.layoutReducer.layoutType;
    console.log("layouttype", layoutType);
  });
  const dispatch = useDispatch();
  return (
    <div className={root}>
      <Container maxWidth={layoutType} disableGutters={true}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={paper}>Header</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={paper}>{children}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={paper}>Footer</Paper>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() =>
                layoutType === "lg"
                  ? dispatch(ToggleType(false))
                  : dispatch(ToggleType("lg"))
              }
            >
              btn {layoutType}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
