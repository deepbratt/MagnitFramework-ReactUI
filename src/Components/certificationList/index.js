import { Grid, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import Lottie from "react-lottie";
import CertificationListStyles from "./style";
import lottie from "lottie-web";
import CustomImage from "../CustomImage";
import DigitalMarketingTraining from "../../assets/training/Digital_Marketing.jpg";
import GraphicDesigningTraining from "../../assets/training/Graphic_designer.jpg";
import WebDevelopmentTraining from "../../assets/training/Web_Development.jpg";
const TrainingImages = {
  "digital_marketing":DigitalMarketingTraining,
  "graphic_design":GraphicDesigningTraining,
  "web_development":WebDevelopmentTraining,
};

const CertificationList = ({ root, data, toRight, mounted }) => {
  const elem = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const { text, imageWrapper, leftAlignment, rightAlignment } =
    CertificationListStyles();
  const { title, description, jsonFile } = data;
  const [jsonData, setJsonData] = useState();

  // useEffect(() => {
  //   if(mounted){
  //     setIsMounted(mounted)
  //   }
  // }, [mounted]);

  // useEffect(()=>{

  //   if(isMounted){
  //     let dataJson = JSON.parse(animationData)
  //     let anim = lottie.loadAnimation({
  //       animationData: dataJson.default,
  //       loop: true,
  //       renderer: 'svg',
  //       container: elem.current,
  //       autoplay: false,
  //     });
  //     anim.play();
  //   }

  //   return () => {
  //     lottie.pause()
  //     lottie.stop()
  //     lottie.destroy();
  //     // setIsMounted(false)
  //   }
  // },[isMounted])

  // if(!isMounted){
  //   return null
  // }

  useEffect(() => {
    if (mounted && jsonData) {
      setIsMounted(mounted);
    }
  }, [mounted, jsonData]);

  useEffect(() => {
    getJsonData().then((res) => {
      setJsonData(res);
    });
  }, []);

  async function getJsonData() {
    let jsonResponse = await axios.get(jsonFile);
    console.log(jsonResponse);
    return jsonResponse.data;
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
    <Grid container className={`${text} ${toRight ? rightAlignment : leftAlignment}`} direction={toRight ? "row-reverse" : "row"}>
      <Grid item xs={12} md={6} style={{padding:"20px"}}>
        <div>
          <Typography color="textPrimary" variant="h3">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={imageWrapper} style={{textAlign: toRight ? "left" : "right"}}>
        {/* <Lottie options={defaultOptions} width="400px" /> */}
        <CustomImage src={TrainingImages[title.replace(/ /g,"_").toLowerCase()]} height="100%"/>
      </Grid>
    </Grid>
  );
};

export default CertificationList;
