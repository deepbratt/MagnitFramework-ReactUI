import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import Heading from "../../ContainerStructure/Headings/Heading4";
import Paragraph from "../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { Oops, PageNotFound } from "./constants";
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";
const Main = ({ ErrorImg }) => {
  const { root, Img, head, paragraph, HomeBtn } = useStyles();
  return (
    <Grid item xs={12} className={root}>
      <section className={head}>
        <img src={ErrorImg} alt="error" className={Img} />
      </section>
      <section className={head}>
        <Heading title={PageNotFound} />
      </section>
      <section className={paragraph}>
        <Paragraph para={Oops} />
      </section>
      <CustomButton type="submit" component={Link} to="/home">
        <Typography className={HomeBtn} variant="button">
          Home
        </Typography>
      </CustomButton>
    </Grid>
  );
};
export default Main;
