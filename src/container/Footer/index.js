import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import FooterStyle from "./style";
import IconFB from "../../assets/images/icon-fb.png";
import IconTwitter from "../../assets/images/icon-twitter.png";
import IconLI from "../../assets/images/icon-linkedIn.png";
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
              <NavLink to="/fb-link">
                <CustomImage src={IconFB} alt="Facebook Icon" />
              </NavLink>
              <NavLink to="/twitter-link">
                <CustomImage src={IconTwitter} alt="Twitter Icon" />
              </NavLink>
              <NavLink to="/li-link">
                <CustomImage src={IconLI} alt="Linked Icon" />
              </NavLink>
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
                key={index}
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
                key={index}
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
