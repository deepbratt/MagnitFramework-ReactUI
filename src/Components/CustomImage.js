import { CircularProgress } from "@material-ui/core";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import React, { useCallback, useState } from "react";
// const CustomImage = ({ src, placeholderImg, errorImg, ...props }) => {
const CustomImage = (props) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = useCallback(() => {
    // setSrc(src);
    setIsLoaded(true)
    // setTimeout(()=>{
    //   setIsLoaded(true)
    // }, 2000) //simulating image load
  }, []);

  // const onError = useCallback(() => {
  //   setSrc(errorImg || placeholderImg);
  // }, [errorImg, placeholderImg]);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = src;
  //   img.addEventListener("load", onLoad);
  //   img.addEventListener("error", onError);
  //   return () => {
  //     img.removeEventListener("load", onLoad);
  //     img.removeEventListener("error", onError);
  //   };
  // }, [src, onLoad, onError]);

  if (hasError) {
    return <CancelPresentationIcon fontSize={"large"} style={{color:props.progressColor, fontSize:100}}/>;
  }

  return (
    <>
   
    <img
      {...props}
      alt={props.alt}
      src={props.src}
      onError={() => setHasError(true)}
     
    />
    </>
  );
};

export default CustomImage;
