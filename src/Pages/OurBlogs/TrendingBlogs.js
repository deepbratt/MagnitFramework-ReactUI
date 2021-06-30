import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";
import { splitString } from "../../Utils/globalFunctions";

import OurBlogsStyles from "./style";

const TrendingBlogs = ({ cardData, blogsBodyText }) => {
  const [blogsBody, setBlogsBody] = useState([]);
  const { title, text, date, image, buttonLabel } = cardData;

  const { coverImage, content, blogDetail, light } = OurBlogsStyles();
  useEffect(() => {
    let blogsText = splitString(text, "<br/>");
    setBlogsBody(blogsText);
  }, [text]);
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <CustomImage className={coverImage} src={image} alt="" />
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
                  {date}
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
            <CustomButton>{buttonLabel}</CustomButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TrendingBlogs;
