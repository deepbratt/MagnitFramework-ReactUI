import { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import { splitString } from "../../Utils/globalFunctions";
import { NavLink } from "react-router-dom";

import OurBlogsStyles from "./style";

const TrendingBlogs = ({ cardData }) => {
  const [blogsBody, setBlogsBody] = useState([]);
  const { title, text, descriptionLong, date, image, banner, buttonLabel, link, canonical } = cardData;

  const { coverImage, content, blogDetail, light } = OurBlogsStyles();
  useEffect(() => {
    let blogsText = splitString(text || descriptionLong, "<br/>");
    setBlogsBody(blogsText);
  }, [text, descriptionLong]);

  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <CustomImage className={coverImage} src={image || banner} alt="" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card>
          <CardContent className={content}>
            <div className={blogDetail}>
              <div>
                <Typography
                  className={light}
                  align="right"
                  variant="body2"
                  component="p"
                >
                  {new Date(date).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"})}
                </Typography>
              </div>
            </div>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            {blogsBody &&
              blogsBody.map((para, index) => (
                <Typography
                  key={index + "blogstrending"}
                  variant="body2"
                  gutterBottom
                  component="p"
                >
                  {para}
                </Typography>
              ))}
          </CardContent>
          <CardActions>
            <NavLink to={link || "blog/"+canonical}>
              <CustomButton>{buttonLabel || "Read More"}</CustomButton>
            </NavLink>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TrendingBlogs;
