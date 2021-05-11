import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";


const BreadCrumb = ({ links }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {links.map((link, index) => (
        <Link key={index} color="inherit" href={link.path}>
          {link.text}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
