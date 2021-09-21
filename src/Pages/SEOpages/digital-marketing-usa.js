import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/loader";
import MetaTags from "../../Components/MetaTags";
import { pathRouting } from "../../Components/Path";
import Section from "../Section";
import useSeoPages from "./useSeoPages";
const DigitalMarketingUSA = () => {
  const { isLoading, metaData } = useSeoPages("digital-marketing-usa");
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
          <Typography variant="h1">Digital Marketing in USA</Typography>
          <Typography variant="body1">
            Enhancing{" "}
            <Link to={pathRouting.digitalMarketing}>Digital Marketing</Link>{" "}
            “businesses can utilize their data to target audiences based on the
            terms such as their gender, age, destination, likes, dislikes, and
            education”
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            Why Digital Marketing is good for your business?
          </Typography>
          <Typography variant="body1">
            Digital marketing is the most highlighting component for marketing
            these days that use internet sources and technology such as
            smartphones, desktop computers, and many of the digital media
            platforms for the promotion of your business services.
            <br />
            <br />
            By adopting &nbsp;
            <Link to={pathRouting.digitalMarketing}>Digital Marketing</Link>,
            your business can reach the utmost public in time and effort
            efficient ways plus reducing the cost as per the desired level.
            <br />
            <br />
            In contrast with traditional marketing, and be more prominent and
            reachable by clients. The measure to see how effective digital
            marketing can be is so soothing and easy.
          </Typography>
          <Typography variant="h3">
            Profits with digital marketing include:
          </Typography>
          <Typography variant="body1">
            <ol>
              <li>
                <b>Become globally reachable</b> - showing your business
                available through the website helps you to determine new
                markets, markets trends with the minimum investment required.
              </li>
              <li>
                <b>Cost-effective</b> - Well planned digital marketing strategy
                and mainly reaching the right targeted audience customers at a
                minimum cost as compared to traditional marketing.
              </li>
              <li>
                <b>Measurable results</b> - Using web analytics and several
                qualitative online tools makes it better to obtain how
                cooperative and functional your campaign has been. To analyze
                how the audience is considering your website or reviewing your
                advertisements.
              </li>
              <li>
                <b>Personalization</b> - Whenever someone visits your website
                you can welcome them with targeted and preferable offers if your
                customer type data is linked with your website.
              </li>
            </ol>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">What Are We Offering?</Typography>
          <Typography variant="body1">
            <ul>
              <li>PPC</li>
              <li>WEB ANALYTICS</li>
              <li>SEO</li>
              <li>SOCIAL MEDIA</li>
              <li>REPUTATION MANAGEMENT</li>
              <li>CONTENT MARKETING</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Pay Per Click-PPC</Typography>
          <Typography variant="body1">
            We ensure on increasing your RetrunOnINvestement with low costs and
            an excess amount of conversions across search engines and social
            media platforms by deep analysis.
          </Typography>
          <br />
          <br />
          <Typography variant="h2">Web-Analytics</Typography>
          <Typography variant="body1">
            Get insights beyond data and numbers. We try our best to use the
            most trending data analysis technology to create a top-ranking
            campaign for you.
          </Typography>
          <br />
          <br />
          <Typography variant="h2">Search Engine Optimization-SEO</Typography>
          <Typography variant="body1">
            Natural page 1 position for your business. Remain at top for the
            item or the help you offer. Rule query items with our compelling
            catchphrase procedure.
          </Typography>
          <br />
          <br />
          <Typography variant="h2">Social Media</Typography>
          <Typography variant="body1">
            From posts to advertising to reviews to replies we take care of
            360-degree marketing campaigns for your business on social media
            platforms that suit your needs.
          </Typography>
          <br />
          <br />
          <Typography variant="h2">Reputation Management</Typography>
          <Typography variant="body1">
            We assure to build and secure a profitable reputation for your
            business brand across different search engines and search results
            generated through it.
          </Typography>
          <br />
          <br />
          <Typography variant="h2">Content Management</Typography>
          <Typography variant="body1">
            We utilize the substance to smash your opposition. Through unique,
            remarkable, lead-producing, and traffic-to-transformation-making
            content.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2"></Typography>
          <Typography variant="body1">
            Our clients and audience prefer us working for them because:
            <ol>
              <li>We work dedicatedly and be easy to deal with.</li>
              <li>
                We opt for expertise so we start rapidly equally dedicated.
              </li>
              <li>
                We always prefer our client’s needs and comfort for scheduling
                things.
              </li>
            </ol>
          </Typography>
          <Typography variant="body1">
            So if you want your business startup to be known all over the globe
            in the mean time. Reaach us out.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default DigitalMarketingUSA;
