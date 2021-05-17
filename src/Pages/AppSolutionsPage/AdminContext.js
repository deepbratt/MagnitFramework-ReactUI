import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Heading4 from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import {
  adminHeading,
  paragraph,
  adminImg,
} from "../../Utils/Constants/Language/en/AppSolutionsData";
import { useStyles } from "./useStyles";

const AdminContext = () => {
  const { root, content, image } = useStyles();
  return (
    <>
      <Paper className={root}>
        <Grid justify="center" container>
          <Grid item lg={12} xs={12}>
            <Heading4 title={adminHeading} />
          </Grid>
          <Grid item lg={5} xs={12}>
            <img className={image} width="400px" src={adminImg} alt="image" />
          </Grid>
          <Grid className={content} xs={10} item lg={6}>
            <Paragraph para={paragraph} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AdminContext;
