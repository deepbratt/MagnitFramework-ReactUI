import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import LayoutStyle from "./style";
import Footer from "../../container/Footer";

const Layout = ({ children }) => {
  const { root, paper } = LayoutStyle();
  const layoutType = useSelector((state) => state.layoutReducer.layoutType);
  return (
    <div className={root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={paper}>Header</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={paper}>
            {children}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
