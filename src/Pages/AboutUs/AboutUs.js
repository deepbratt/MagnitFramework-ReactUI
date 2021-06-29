import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import Main from "../../Sections/MainComponent/AboutMainSection";
import MissionContext from "../../Sections/Mission&Vision/MissionContext";
import WhyUsContainer from "./WhyUsContainer";
import { MainData } from "../../Utils/Constants/Language/AboutUsData";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import MetaTags from "../../Components/MetaTags";
import { Typography } from "@material-ui/core";
import { Loader } from "../../Components/loader";

const AboutUs = () => {
  const [metaData, setMetaData] = useState({});
  const [sections, setSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { hero } = useStyles();
  const breadcrumbs = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About Us",
    },
  ];

  const getPageData = useCallback(async () => {
    setIsLoading(true);
    await getPageDataApi("about")
      .then((response) => {
        if (response.status === "success") {
          console.log("response", response);
          setMetaData(response.data.result.metaData);
          setSections(response.data.result.sections);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  useEffect(() => {
    getPageData();
    console.log("useEffect");
  }, [getPageData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid container>
          <MetaTags
            title={metaData.title}
            description={metaData.description}
            canonical={metaData.canonical}
            keywords={metaData.keywords}
          />
          <Grid
            style={{ order: sections.banner.order }}
            item
            lg={12}
            md={12}
            xs={12}
          >
            <Main
              width="650px"
              data={sections.banner.dataArray[0]}
              class={hero}
              card={true}
              breadcrumbData={breadcrumbs}
            />
          </Grid>

          <Grid
            style={{ order: sections.ourObjectives.order }}
            item
            lg={12}
            md={12}
            xs={12}
          >
            <MissionContext data={sections.ourObjectives.dataArray} />
          </Grid>
          <Grid style={{ order: sections.benefits.order }} item md={12} xs={12}>
            <WhyUsContainer data={sections.benefits.dataArray} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default AboutUs;
