import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import Main from "./Main";
import Section from "../Section";
import Opportunities from "./OpportunityContext";
import { Loader } from "../../Components/loader";
import CustomTitle from "../Section/CustomTitle";
import MetaTags from "../../Components/MetaTags";
import PointList from "../../Components/PointBadge/PointList";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import { useStyles } from "../../Sections/MainComponent/mainStyles";

const CareerContainer = () => {
  const { hero } = useStyles();
  const [metaData, setMetaData] = useState({});
  const [sections, setSections] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = useCallback(async () => {
    setIsLoading(true);
    await getPageDataApi("careers")
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

  const jobBenifitsDataArray = (jobBenifitsData) => {
    let data = jobBenifitsData.map(({ title, text, icon, buttonLabel, link }) => ({
      title: title,
      description: text,
      image: icon,
      buttonLabel: buttonLabel,
      buttonLink: link,
    }));
    console.log("newData", data);
    return data;
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
            <Main width="550px" data={sections.banner} class={hero} />
          </Grid>
          <Grid
            style={{ order: sections.jobBenifits.order }}
            item
            lg={12}
            md={12}
            xs={12}
          >
            <Section>
              <CustomTitle
                text={sections.jobBenifits.title}
                underlined={true}
              />
              <PointList
                lgBreakpoint={3}
                data={jobBenifitsDataArray(sections.jobBenifits.dataArray)}
              />
            </Section>
          </Grid>
          <Grid
            style={{ order: sections.opportunites.order }}
            item
            lg={12}
            md={12}
            xs={12}
          >
            <Opportunities data={sections.opportunites} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CareerContainer;
