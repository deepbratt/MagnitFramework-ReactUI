import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link, NavLink } from "react-router-dom";
import FooterStyle from "./style";
import IconFB from "../../assets/images/icon-fb.png";
import IconTwitter from "../../assets/images/icon-twitter.png";
import IconLI from "../../assets/images/icon-linkedIn.png";

const Footer = () => {
  const { root, logo, list, section, policy, contact } = FooterStyle();
  const ls = ["Company", "Service", "Solutions", "FAQ'S"];
  const lsTwo = ["Case Study", "Blog", "Career"];
  return (
    <footer className={root}>
      <Grid container spacing={1} direction="row" justify="space-between">
        {/* <Grid item xs={12} md={4} lg={3}>
          <div className={logo}>
            <Typography
              style={{ color: "#FFFFFF" }}
              align="left"
              gutterBottom
              variant="h2"
            >
              Logo Here
            </Typography>
          </div>
        </Grid> */}
        <Grid item xs={12} md={4} lg={2}>
          <div className={list}>
            {ls
              .filter((item, idx) => idx < 5)
              .map((item) => (
                <Link to={`\${item}`}>
                  <Typography
                    style={{ marginBottom: "30px" }}
                    align="left"
                    gutterBottom
                    variant="body1"
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <div className={list}>
            {lsTwo
              .filter((item, idx) => idx < 5)
              .map((item) => (
                <Link to={`\${item}`}>
                  <Typography
                    style={{ marginBottom: "30px" }}
                    align="left"
                    gutterBottom
                    variant="body1"
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <div className={section}>
            <Typography align="left" gutterBottom variant="h3">
              TALK TO US
            </Typography>
            <Typography align="left" gutterBottom variant="body1">
              USA/Canada: 713-489-0845
              <br /> Australia: (02)-9191-2621
              <br /> UK: (0)-203-514-2412
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <div className={section}>
            <Typography align="left" gutterBottom variant="h3">
              INDIA OFFICE
            </Typography>
            <Typography align="left" gutterBottom variant="body1">
              Shakti Tower, EN 60, 5th Floor, Sector V, Saltlake, Kolkata 700091
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className={section}>
            <div className={logo}>
              <Typography
                style={{ color: "#FFFFFF" }}
                align="left"
                gutterBottom
                variant="h2"
              >
                Logo Here
              </Typography>
            </div>
            <Typography align="left" gutterBottom variant="h3">
              CONNECT WITH US
            </Typography>
            <div className={contact}>
              <img src={IconFB} alt="Facebook Icon" />
              <img src={IconTwitter} alt="Twitter Icon" />
              <img src={IconLI} alt="Linked Icon" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            className="copyrights"
            align="left"
            gutterBottom
            variant="caption"
          >
            © 2021 Company name, All Rights Reserved. CIN: U72300WB2013PTC191520
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={policy}>
            <Typography gutterBottom variant="caption">
              Life-Time Support
            </Typography>
            <Typography align="right" gutterBottom variant="caption">
              Terms of Service
            </Typography>
            <Typography align="right" gutterBottom variant="caption">
              Disclaimer & Privacy Policy
            </Typography>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
