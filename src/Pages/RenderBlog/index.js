import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MetaTags from "../../Components/MetaTags";
import DOMPurify from "dompurify";
import { useStyles } from "./useStyles";
import { Loader } from "../../Components/loader";

const RenderBlog = () => {
  const { canonicalId } = useParams();
  const [data, setData] = useState("");
  const { container } = useStyles();
  const [isLoading, setLoading] = useState(false)

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  useEffect(()=>{
    if(canonicalId){
        // fetch data
    }
  },[canonicalId])

  if(isLoading){
      return <Loader/>
  }

  return (
    <Grid container>
      <MetaTags />
      <div
        className={container}
        dangerouslySetInnerHTML={createMarkup(data)}
      ></div>
    </Grid>
  );
};

/*
data={
    ....,
    filters:{
        milage:""
    }
}
*/
