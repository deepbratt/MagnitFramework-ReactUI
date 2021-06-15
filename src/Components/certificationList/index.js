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
    let anim = lottie.loadAnimation({
      animationData: animationData.default,
      loop: true,
      renderer: 'svg',
      container: elem.current,
      autoplay: false,
    });

    const play = () => {
      anim.play();
    };
    if(mounted){
      // console.log('mounted inner: ', mounted)
      setIsMounted(mounted)
      anim.addEventListener('DOMLoaded', play);
    }

    return () => {
      anim.removeEventListener('DOMLoaded', play);
      anim.stop()
      anim.destroy();
      anim = ""
      setIsMounted(false)
      // console.log('component unmounted')
    }
  }, [mounted, animationData.default]);

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
        {/* {console.log(isMounted)} */}
        {isMounted ?<div ref={elem} style={{width:"400px"}}></div> : null}
      </Grid>
    </Grid>
  );
};

export default CertificationList;
