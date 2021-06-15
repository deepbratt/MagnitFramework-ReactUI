import { Grid, Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
// import Lottie from "react-lottie";
import CertificationListStyles from "./style";
import lottie from 'lottie-web';

const CertificationList = ({ root, data, toRight, mounted }) => {
  const elem = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const { text, imageWrapper, leftAlignment, rightAlignment } =
    CertificationListStyles();
  const { title, content, animationData } = data;


  useEffect(() => {
    if(mounted){
      setIsMounted(mounted)
    }
  }, [mounted]);

  useEffect(()=>{
    
    if(isMounted){
      let dataJson = JSON.parse(animationData)
      let anim = lottie.loadAnimation({
        animationData: dataJson.default,
        loop: true,
        renderer: 'svg',
        container: elem.current,
        autoplay: false,
      });
      anim.play();
    }

    return () => {
      lottie.pause()
      lottie.stop()
      lottie.destroy();
      // setIsMounted(false)
    }
  },[isMounted])

  if(!isMounted){
    return null
  }

  return (
    <Grid container className={`${root}`}>
      <Grid item xs={12} md={6}>
        <div className={`${text} ${toRight ? rightAlignment : leftAlignment}`}>
          <Typography color="textPrimary" variant="h3">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {content}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={imageWrapper}>
        {isMounted && <div ref={elem} style={{width:"400px"}}></div>}
      </Grid>
    </Grid>
  );
};

export default CertificationList;
