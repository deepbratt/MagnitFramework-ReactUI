import { Hidden, Typography } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const BreadCrumb = ({ links }) => {
  return (
    <Hidden smDown>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {links.map((link, index) => (
          <Link key={index} color="inherit" href={link.path}>
            <Typography variant="h6">{link.text}</Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Hidden>
  );
};

export default BreadCrumb;
