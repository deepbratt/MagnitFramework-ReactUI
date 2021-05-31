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
import CustomTitle from "../../Pages/Section/CustomTitle"
import { useStyles } from "./useStyles";

const AdminContext = () => {
  const {content, image } = useStyles();
  return (
    <>
    <MuiThemeProvider theme={theme}>
      <Grid container >
        <Grid container>
          <Grid item md={12} lg={12} xs={12}>
          <CustomTitle style={{marginBottom: "20px"}} underlined={false} text={adminHeading} />
          </Grid>
          <Grid item  md={12} lg={5} xs={12}>
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
