import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({ canonical, title, description, keywords }) => {
    const helmet = Helmet
  useEffect(() => {
    window.document.title = title;
  }, [title]);
  return (
    <Helmet defer={false}>
      <meta property="og:url" content="https://magnit.com/" />
      <meta property="og:title" content={title} />
      {/* <meta property="og:image" content="https://abc.xyz/favicon-194x194.png"/> */}
      <meta property="og:site_name" content="Magnit" />
      <meta property="og:description" content={description} />

      <meta itemprop="name" content="Magnit" />
      <meta itemprop="description" content={description} />
      {/* <meta itemprop="image" content="https://abc.xyz/android-chrome-192x192.png"/> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="https://abc.xyz/android-chrome-192x192.png"/> */}

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={"https://magnit.com/" + canonical} />
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTags;
