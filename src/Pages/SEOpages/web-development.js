import { Grid, Typography } from "@material-ui/core";
import MetaTags from "../../Components/MetaTags";
import { Link } from "react-router-dom";
import { pathRouting } from "../../Components/Path";
import Section from "../Section";
import useSeoPages from "./useSeoPages";
import { Loader } from "../../Components/loader";

const WebDevelopment = () => {
    const {isLoading, metaData} = useSeoPages('web-development-usa')
    if(isLoading){
        return <Loader/>
    }
  return (
    <Section>
      <Grid container style={{ textAlign: "left" }} spacing={2}>
        <MetaTags
          title={metaData.title}
          description={metaData.description}
          canonical={metaData.canonical}
          keywords={metaData.keywords}
        />
        <Grid item xs={12}>
          <Typography variant="h1">
            Web Development Company in the USA
          </Typography>
          <Typography variant="body1" component="p">
            If you want to increase the amount of time visitors spent on your
            website, then try pondering upon its web development.
            <br/><br/>
            An optimized website design plays a very prominent role in
            sustaining the attention of a human being.
            <br/><br/>
            As an affordable web development company, we are providing reliable
            solutions for website design and{" "}
            <Link to={pathRouting.webServices}>web development services</Link>.
            To make it easier let’s say we are here to make your website look
            great and work faster. Consequently maximizing the visitor-to-lead
            conversion.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Why Web Development?</Typography>
          <Typography variant="body1" component="p">
            According to the latest statistics, the average attention span of an
            internet user has decreased from 12 seconds to 8 seconds. However,
            on the other hand, more than 45% of people expect a web page to load
            in 2 seconds or earlier!
            <br/><br/>
            This means that you have only 8 seconds to catch the attention of
            your visitor on a landing page that has to be loaded in 2 seconds or
            less.
            <br/><br/>
            This is the place where web development draws our attention towards
            itself. In order to sustain the visitor on a website, its design
            must be kinda interesting. However, web development is held
            responsible for the loading time.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Why Hire Us?</Typography>
          <Typography variant="body1" component="p">
            Being a leading{" "}
            <Link to={pathRouting.webServices}>
              software company in the USA
            </Link>
            , we directly translate ideas and designs into responsive front-end
            interfaces that pioneer accessibility, ease-of-use, and performance
            towards your audiences.
            <br/><br/>
            We have mastered the art of building the right product by combining
            the right disciplines to give you exactly what you need and beyond.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">What We Are Providing</Typography>
          <Typography variant="body1">
            <ul>
              <li>Migration and Upgradation</li>
              <li>API Development</li>
              <li>CMS Development</li>
              <li>E-Commerce Development</li>
              <li>Issues &amp; Bug Fixes</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">MIGRATION &amp; UPGRADATION</Typography>
          <Typography variant="body1" component="p">
            We are here to provide you with a reliable solution to upgrade your
            already existing websites to upgraded versions without pauses or
            delay so that your business website works smoothly without impacting
            the increasing traffic.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">API DEVELOPMENT</Typography>
          <Typography variant="body1" component="p">
            We have our experienced and professional team of engineers who
            provide tremendous development solutions with amazing API designs
            that not only make the website simpler to navigate through the
            server or the hosting website but also make a user-friendly
            environment.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">CMS DEVELOPMENT</Typography>
          <Typography variant="body1" component="p">
            We are on the purpose of serving our clients a unique, demonstrative
            user-friendly, content Management system that provides different
            users to have a privilege of different levels while hovering your
            business needs.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">E-COMMERCE DEVELOPMENT</Typography>
          <Typography variant="body1" component="p">
            Our experts provide services for your online store no matter of what
            genre it is. We designed it that way your online shops looks
            attractive and be user-friendly and provides beneficial descriptions
            to grab the attention of targeted audience.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">ISSUES &amp; BUG FIXES</Typography>
          <Typography variant="body1" component="p">
            We provide optimal solution for the issues that occur in your web
            application by providing cost-effective ways.
            <br/><br/>
            Still have any confusion?
            <br/><br/>
            Well, you can always get a free quote from us anytime! Just click on
            the Request a Quote button and get the response within a day.
            <br/><br/>
            You can also contact us at:{" "}
            <Link to={pathRouting.webServices}>USA: +1 (214) 329-9898</Link>
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default WebDevelopment;
