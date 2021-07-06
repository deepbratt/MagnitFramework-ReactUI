import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import FooterStyle from "./style";
import Logo from "../../assets/Logo-white.png";
import { footerText } from "../../Utils/Constants/Language";
import CustomImage from "../../Components/CustomImage";

const Footer = () => {
  const { root, logo, section, policy, contact, sectionBorder, copyright } =
    FooterStyle();
  const { navigation, copyrights, lifeTimeSupport, terms, disclaimer } =
    footerText;


  const [data, setData] = useState([]);
  const [mounted, setIsMounted] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (mounted && data) {
      setIsMounted(mounted);
    }
  }, [mounted, data]);

  useEffect(() => {
    loadData().then((res) => {
      setData(res.data.data.result.sections.company.dataArray);
      setIsLoading(false)
    });
  }, []);

  async function loadData() {
    let response = await axios.get(
      "https://api.themagnit.com/v1/pages/bySlug/footer"
    );
    return response;
  }
  if (isLoading) return null;
  return (
    <footer className={root}>
      {data.map(({ contactUs, socialMedia, locations }, key) => {
        return (
          <>
            <Grid
              key={`footer ${key}`}
              container
              spacing={1}
              direction="row"
              justify="space-between"
            >
              <Grid item xs={12} md={4} lg={3}>
                <div className={section}>
                  <div className={logo}>
                    <CustomImage src={Logo} alt="Maginit Logo" />
                  </div>
                  <Typography align="left" gutterBottom variant="h5">
                    {socialMedia.heading}
                  </Typography>
                  <div className={contact}>
                    {socialMedia.dataArray.map((data) => {
                      return (
                        <Link to={data.link} target="_blank">
                          <img height="auto" width="100%" src={data.icon} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} lg={2}>
                <div className={section}>
                  <Typography
                    align="left"
                    gutterBottom
                    variant="h5"
                    component="h5"
                  >
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
                    {contactUs.heading}
                  </Typography>
                  {contactUs.dataArray.map((num, index) => (
                    <Typography
                      key={index + "talktous"}
                      align="left"
                      gutterBottom
                      variant="caption"
                    >
                      {num.country} {num.number}
                    </Typography>
                  ))}
                </div>
              </Grid>

              <Grid item xs={12} md={4} lg={2}>
                <div className={section}>
                  <Typography align="left" gutterBottom variant="h5">
                    {locations.heading}
                  </Typography>
                  {locations.dataArray.map((location, index) => (
                    <Typography
                      key={index + "addressSection"}
                      align="left"
                      gutterBottom
                      variant="caption"
                    >
                      {location.address}
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
          </>
        );
      })}
    </footer>
  );
};

export default Footer;
