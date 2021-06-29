import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import Main from "./Main";
import { banner } from "../../Utils/Constants/Language/en/CareersData";
import Opportunities from "./OpportunityContext";
import Section from "../Section";
import { Data, Array } from "../../Utils/Constants/Language/en/CareersData";
import PointList from "../../Components/PointBadge/PointList";
import CustomTitle from "../Section/CustomTitle";
import { useStyles } from "../../Sections/MainComponent/mainStyles";
import { getPageDataApi } from "../../Utils/APIs/pagesApi";
import MetaTags from "../../Components/MetaTags";
import { Loader } from "../../Components/loader";

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
              width="550px"
              hero={sections.banner.dataArray[0].image}
              class={hero}
            />
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
                data={sections.jobBenifits.dataArray}
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
