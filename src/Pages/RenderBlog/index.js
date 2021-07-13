import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MetaTags from "../../Components/MetaTags";
import DOMPurify from "dompurify";
import { useStyles } from "./useStyles";
import { Loader } from "../../Components/loader";
import api from "../../Utils/Constants/api";
import { useCancelToken } from "../../Utils/CustomHooks/useCancelToken";
import axios from "axios";
import Section from "../Section";
import Banner from "../../Components/Banner";

const RenderBlog = () => {
  const { canonicalId } = useParams();
  const [data, setData] = useState({});
  const [htmlString, setHtmlString] = useState("");
  const { container, bannerClass } = useStyles();
  const [isLoading, setLoading] = useState(false);

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const fetchHtml = async (htmlUrl) => {
    let htmlString = await axios.get(htmlUrl);
    return htmlString;
  };

  useEffect(() => {
    setLoading(true);
    if (canonicalId) {
      // fetch data
      setLoading(true);
      api
        .getBlogByCanonical(canonicalId)
        .then((response) => {
          if (response.data.status === "success") {
            console.log(response);
            setData(response.data.data.result);
            fetchHtml(response.data.data.result.html).then((result) => {
              setHtmlString(result.data);
            });
          } else {
            console.log(response.data);
          }
        })
        .then(() => setLoading(false));
    }
  }, [canonicalId]);

  if (isLoading || !htmlString) {
    return <Loader />;
  }

  return (
    <Grid container>
      <MetaTags canonical={data.canonical} keywords={data.keywords} description={data.description} title={data.title}/>
      <Grid item xs={12}>
        {/* <img src={data.banner} alt={data.canonical} className={bannerClass}/> */}
        <div className={bannerClass} style={{background:`url(${data.banner}) no-repeat center`, backgroundSize:"100%"}}/>
      </Grid>
      <Grid item xs={12}>
        <Section>
          <div
            className={container}
            dangerouslySetInnerHTML={createMarkup(htmlString)}
          ></div>
        </Section>
      </Grid>
    </Grid>
  );
};

export default RenderBlog;

/*
data={
    ....,
    filters:{
        milage:""
    }
}
*/
