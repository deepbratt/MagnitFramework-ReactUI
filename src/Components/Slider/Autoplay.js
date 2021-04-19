import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";

const Autoplay = () => {
  const [x, setX] = useState(0);

  const delay = 3000;

  const timeoutRef = useRef(null);
  let slideArr = [<Slider />, <Slider />];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setX((prevIndex) =>
          prevIndex === -100 * (slideArr.length - 1)
            ? setX(0)
            : setX(prevIndex - 100)
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [x]);
  return { x, slideArr, setX };
};

export default Autoplay;
