import React from "react";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const Footer = ({ theme, settings }) => {
  //const footerTheme = settings.themes[settings.footer.theme] || theme;
  return <ThemeProvider></ThemeProvider>;
};

Footer.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.layout.settings,
});

export default withStyles(
  {},
  { withTheme: true }
)(connect(mapStateToProps, {})(Footer));
