import React, { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const ReadMore = ({ text, maxLines, ellipses }) => {
  const [isExpand, setExpand] = useState(false);
  return (
    <>
      {isExpand ? (
        <div>{text}</div>
      ) : (
        <div onClick={() => setExpand(!isExpand)}>
          <LinesEllipsis
            text={text}
            maxLine={maxLines}
            ellipsis={ellipses}
            trimRight
            basedOn="letters"
          />
        </div>
      )}
    </>
  );
};

export default ReadMore;
