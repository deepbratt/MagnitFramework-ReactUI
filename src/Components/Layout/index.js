import PropTypes from "prop-types";
import React from "react";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <div>Header</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
