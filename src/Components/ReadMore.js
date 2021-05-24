import React from "react";
import ReadMoreReact from "read-more-react";
import { Typography } from "@material-ui/core";
import useStyles from "../Pages/Home/style";

const ReadMore = ({ data }) => {
  const { readMore } = useStyles();
  return (
    <ReadMoreReact
      text={data}
      min={57}
      ideal={57}
      max={100}
      readMoreText={
        <Typography className={readMore} variant="h6">
          read more
        </Typography>
      }
    />
  );
};

export default ReadMore;
