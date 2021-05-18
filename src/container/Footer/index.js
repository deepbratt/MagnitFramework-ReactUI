import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link, NavLink } from "react-router-dom";
import FooterStyle from "./style";
import IconFB from "../../assets/images/icon-fb.png";
import IconTwitter from "../../assets/images/icon-twitter.png";
import IconLI from "../../assets/images/icon-linkedIn.png";
import Logo from "../../assets/Logo-white.png";
import { footerText } from "../../Utils/Constants/Language";
import CustomImage from "../../Components/CustomImage";

const Footer = () => {
  const {
    root,
    logo,
    list,
    section,
    policy,
    contact,
    sectionBorder,
  } = FooterStyle();
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
              <CustomImage src={IconFB} alt="Facebook Icon" />
              <CustomImage src={IconTwitter} alt="Twitter Icon" />
              <CustomImage src={IconLI} alt="Linked Icon" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <div className={list}>
            <Typography align="left" gutterBottom variant="h5" component="h5">
              {navigation.title}
            </Typography>
            {navigation.links.map((item, idx) => (
              <Link key={idx} to={`\${item}`}>
                <Typography align="left" gutterBottom variant="body2">
                  {item}
                </Typography>
              </Link>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <div className={section}>
            <Typography align="left" gutterBottom variant="h5">
              {talkToUsSection.title}
            </Typography>
            {talkToUsSection.numbers.map((num, index) => (
              <Typography key={index} align="left" gutterBottom variant="body2">
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
            <Typography align="left" gutterBottom variant="body2">
              {addressSection.address}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid className={sectionBorder} container>
        <Grid item xs={12} md={6}>
          <Typography
            className="copyrights"
            align="left"
            gutterBottom
            variant="body2"
            component="p"
          >
            {copyrights}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={policy}>
            <Typography gutterBottom variant="body2">
              {lifeTimeSupport}
            </Typography>
            <Typography align="right" gutterBottom variant="body2">
              {terms}
            </Typography>
            <Typography align="right" gutterBottom variant="body2">
              {disclaimer}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
