import React from "react";
import { Grid, Typography } from "@material-ui/core";
import theme from "../../Theme/GlobalFontSizes"
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  adminHeading,
  paragraph,
  adminImg,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import CustomImage from "../../Components/CustomImage"
import { useStyles } from "./useStyles";

const AdminContext = () => {
  const { root, content, image } = useStyles();
  return (
    <>
    <MuiThemeProvider theme={theme}>
      <Grid container className={root}>
        <Grid justify="center" container>
          <Grid item md={12} lg={12} xs={12}>
            <Typography color="textPrimary" variant="h2">
              {adminHeading}
            </Typography>
          </Grid>
          <Grid item  md={12} lg={4} xs={12}>
            <CustomImage className={image} width="400px" src={adminImg} alt="image" />
          </Grid>
          <Grid className={content} xs={10} item lg={6}>
            <Typography variant="body2">
            {paragraph}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      </MuiThemeProvider>
    </>
  );
};

export default AdminContext;
