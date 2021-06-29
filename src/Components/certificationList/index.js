import { Grid, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import axios from "axios";
import { useState,useEffect } from "react";
import CertificationListStyles from "./style";

const CertificationList = ({ root, data, toRight }) => {
  const { text, imageWrapper, leftAlignment, rightAlignment } =
    CertificationListStyles();
  const { title, description, jsonFile } = data;

  const [jsonData, setJsonData] = useState()
  const [mounted, setIsMounted] = useState()


  useEffect(() => {
    if(mounted && jsonData){
      setIsMounted(mounted)
    }
  }, [mounted, jsonData]);

  useEffect(()=>{
    getJsonData().then(res=>{
      setJsonData(res)
    })
  },[])

  async function getJsonData(){
    let jsonResponse = await axios.get(jsonFile)
    console.log(jsonResponse)
    return jsonResponse.data
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container className={`${root}`}>
      <Grid item xs={12} md={6}>
        <div className={`${text} ${toRight ? rightAlignment : leftAlignment}`}>
          <Typography color="textPrimary" variant="h3">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={imageWrapper}>
        <Lottie options={defaultOptions} width="400px" />
      </Grid>
    </Grid>
  );
};

export default CertificationList;
