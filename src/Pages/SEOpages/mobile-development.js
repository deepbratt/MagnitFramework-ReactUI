import { Grid, Typography } from "@material-ui/core";
import MetaTags from "../../Components/MetaTags";
import { Link } from "react-router-dom";
import { pathRouting } from "../../Components/Path";
import Section from "../Section";
import { Loader } from "../../Components/loader";
import useSeoPages from "./useSeoPages";

const MobileAppDevelopment = () => {
  const { isLoading, metaData } = useSeoPages("app-development-usa");
  if (isLoading) {
    return <Loader />;
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
            Mobile App Development Company in the USA
          </Typography>
          <Typography component="p" variant="body1">
            You’d be surprised to know that 49% of people open an app 11+ times
            each day and 69% of all the{" "}
            <Link to={pathRouting.appSolutions}>US digital media</Link>. comes
            from mobile apps.
            <br />
            <br />
            Well, no one can tell you the benefits of having a mobile app for
            your business better than these facts and figures.
            <br />
            <br />
            As a leading mobile app development company, currently, we are
            offering both iOS as well as android app development services.
            <br />
            <br />
            Just provide us with your requirements and our team of expert
            engineers and app developers will fabricate a unique, responsive,
            and easy-to-use mobile application for the sake of your business
            growth.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            Why Have a Mobile App for Your Business?
          </Typography>
          <Typography variant="body1" component="p">
            According to a research conducted by Flurry, people in the US spend
            more than 5 hours daily on their smartphones. Out of which only 8%
            time is spent on websites and the rest on mobile apps.
            <br />
            <br />
            With the passage of time, mobile applications are dominating the
            websites in seeking customer attention.
            <br />
            <br />
            That’s why along with having a professional website, it’s advised to
            develop a unique app for your business as well.
            <br />
            <br />
            If you also want a mobile application to be developed for your
            business, you can simply contact us.
            <br />
            <br />
            Following are the services we are providing in mobile application
            development.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Mobile App Development Services</Typography>
          <Typography variant="body1" component="p">
            We offer app development services for both platforms i.e., iOS and
            Android.
          </Typography>
          <div style={{ padding: "10px" }}>
            <Typography variant="h3">
              1. Android App Development Services
            </Typography>
            <Typography variant="body1" component="p">
              As a leading android app development company in the USA, Our
              Android App developers have expertise in the development of
              android applications. We ensure the use of GUI testing to make
              sure that the Android apps we make meet all the desired
              requirements and are of the best quality.
            </Typography>
            <br />
            <br />
            <Typography variant="h3">
              2. iOS App Development Services
            </Typography>
            <Typography variant="body1" component="p">
              While on the other hand, we also provide solutions to update the
              iOs application to the up-to-date OS version keeping track of the
              need and maintaining stability. Our iOS apps development team is
              capable of executing major complex business argumentation.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Why Hire Us?</Typography>
          <Typography variant="body1" component="p">
            We provide numerous benefits for our precious customers as we
            believe that no business can succeed unless they invest in their
            customer support. Following are some of the many benefits you will
            get to work with us.
          </Typography>
          <div style={{ padding: "10px" }}>
            <Typography variant="h3">&bull; One Time Cost</Typography>
            <Typography variant="body1" component="p">
              You will not have to pay for every step of the app development
              process. Moreover, you can also get a free quote whenever you feel
              like having one.
            </Typography>
            <br />
            <br />
            <Typography variant="h3">&bull; Latest Technology</Typography>
            <Typography variant="body1" component="p">
              Equipped with the modern tools and latest technology, we regularly
              get updated with the newest tools in software technology along
              with the trends in your industry.
            </Typography>
            <br />
            <br />
            <Typography variant="h3">&bull; Quality Assurance</Typography>
            <Typography variant="body1" component="p">
              Strict quality assurance and control is the secret to our
              successful custom app development services.
            </Typography>
            <br />
            <br />
            <Typography variant="h3">&bull; Data Security</Typography>
            <Typography variant="body1" component="p">
              As the top priority for us is our client’s security hence, we make
              sure to secure any confidential data shared with us with the
              latest security tools, measures, and regulations
            </Typography>
            <br />
            <br />
            <Typography variant="h3">&bull; Code will be Yours</Typography>
            <Typography variant="body1" component="p">
              Once the project is completed, we will hand over the source code
              to you.
            </Typography>
            <br />
            <br />
            <Typography variant="h3">&bull; Lifetime Support</Typography>
            <Typography variant="body1" component="p">
              Our relation with the customer does not end with the end of the
              project. Indeed, we go beyond the call to fix bugs and issues in
              the code to ensure customer satisfaction.
            </Typography>
            <br />
            <br />
            <Typography variant="h3">
              &bull; Customize According to your Needs
            </Typography>
            <Typography variant="body1" component="p">
              The R&amp;D department of ours execute a comprehensive research
              about your targeted audience and market before to fix bugs and
              issues in the code to ensure customer satisfaction.
            </Typography>
            <br />
            <br />
          </div>
        </Grid>
      </Grid>
    </Section>
  );
};

export default MobileAppDevelopment;
