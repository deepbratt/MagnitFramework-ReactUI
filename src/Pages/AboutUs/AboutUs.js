import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import WhyUsContainer from "./WhyUsContainer";
import { Loader } from "../../Components/loader";
import MetaTags from "../../Components/MetaTags";
import Main from "../../Sections/MainComponent/AboutMainSection";
import MissionContext from "../../Sections/Mission&Vision/MissionContext";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { splitString } from "../../Utils/globalFunctions";

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

  const getBannerText = () => {
    let bannerText = splitString(
      sections.banner.dataArray[0].subHeading,
      "<br/>"
    );
    return bannerText;
  };

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
              bannerText={getBannerText()}
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
            <WhyUsContainer
              title={sections.benefits.title}
              data={sections.benefits.dataArray}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default AboutUs;
