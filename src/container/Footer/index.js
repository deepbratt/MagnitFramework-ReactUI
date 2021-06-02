import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link, NavLink } from "react-router-dom";
import FooterStyle from "./style";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Logo from "../../assets/Logo-white.png";
import { footerText } from "../../Utils/Constants/Language";
import CustomImage from "../../Components/CustomImage";

const Footer = () => {
  const { root, logo, section, policy, contact, sectionBorder, copyright } =
    FooterStyle();
  const {
    contactUs,
    navigation,
    addressSection,
    talkToUsSection,
    copyrights,
    lifeTimeSupport,
    terms,
    disclaimer,
  } = footerText;
  return (
    <footer className={root}>
      <Grid container spacing={1} direction="row" justify="space-between">
        <Grid item xs={12} md={4} lg={3}>
          <div className={section}>
            <div className={logo}>
              <CustomImage src={Logo} alt="Maginit Logo" />
            </div>
            <Typography align="left" gutterBottom variant="h5">
              {contactUs}
            </Typography>

            <div className={contact}>
              <Link
                to={{
                  pathname: "https://www.facebook.com/Magnit-102896788671971",
                }}
                target="_blank"
              >
                <FacebookIcon color="secondary" />
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.instagram.com/magnit321/?fbclid=IwAR38BHwlVMHmzIP5F-0xTa_9LdXZSiH8g00Z2kXWKtfyMmeuBMFBEUhV6Ps",
                }}
                target="_blank"
              >
                <InstagramIcon color="secondary" />
              </Link>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/company/themagnit/",
                }}
                target="_blank"
              >
                <LinkedInIcon color="secondary" />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <div className={section}>
            <Typography align="left" gutterBottom variant="h5" component="h5">
              {navigation.title}
            </Typography>
            {navigation.links.map((link, idx) => (
              <NavLink key={idx} to={link.route}>
                <Typography align="left" gutterBottom variant="caption">
                  {link.value}
                </Typography>
              </NavLink>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <div className={section}>
            <Typography align="left" gutterBottom variant="h5">
              {talkToUsSection.title}
            </Typography>
            {talkToUsSection.numbers.map((num, index) => (
              <Typography
                key={index+"talktous"}
                align="left"
                gutterBottom
                variant="caption"
              >
                {num}
              </Typography>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <div className={section}>
            <Typography align="left" gutterBottom variant="h5">
              {addressSection.title}
            </Typography>
            {addressSection.address.map((location, index) => (
              <Typography
                key={index+"addressSection"}
                align="left"
                gutterBottom
                variant="caption"
              >
                {location}
              </Typography>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid className={sectionBorder} container>
        <Grid item xs={12} md={12} lg={6}>
          <div className={copyright}>
            <Typography
              align="left"
              gutterBottom
              variant="caption"
              component="p"
            >
              {copyrights}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div className={policy}>
            <NavLink to="/life-time-support">
              <Typography gutterBottom variant="caption">
                {lifeTimeSupport}
              </Typography>
            </NavLink>
            <NavLink to="/terms-of-service">
              <Typography align="right" gutterBottom variant="caption">
                {terms}
              </Typography>
            </NavLink>
            <NavLink to="/privacy-policy">
              <Typography align="right" gutterBottom variant="caption">
                {disclaimer}
              </Typography>
            </NavLink>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
