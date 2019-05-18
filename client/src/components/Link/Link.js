import React from "react";
import { Link } from "react-router-dom";
import Radium from "radium";
import color from "color";
import Icon from "../Icon";
import theme from "../../theme";
const defaultStyle = props => ({
  display: "inline-flex",
  justifyContent: "flex-start",
  alignItems: "center",
  textDecoration: props.noUnderline ? "none" : "inherit",
  color: props.blue ? theme.colors.link : "#000"
});
const JBLink = props => {
  const { noUnderline, blue, icon, style, ...rest } = props;
  return (
    <React.Fragment>
      <Link
        style={{ ...defaultStyle({ noUnderline, blue }), ...style }}
        {...rest}
      />
      {icon && <Icon icon={icon.name} />}
    </React.Fragment>
  );
};
export const ExternalLink = ({ noUnderline, blue = true, style, ...rest }) => {
  return null;
  // <a style={{ ...defaultStyle({ noUnderline, blue }), ...style }} {...rest} />
};
const background = theme.colors.light;
const buttonLinkStyles = {
  backgroundColor: background,
  border: "1px solid #000",
  borderRadius: "0.4rem",
  color: "#000",
  padding: theme.buttons.padding,
  textDecoration: "none",
  ":hover": {
    backgroundColor: color(background).darken(0.15),
    borderColor: color(background).darken(0.15),
    textDecoration: "none",
    cursor: "pointer"
  },
  ":focus": {
    boxShadow:
      "0 0 0 0.2rem " +
      color(background)
        .lighten(0.15)
        .fade(0.5)
  },
  ":active": {
    textDecoration: "none",
    boxShadow:
      "0 0 0 0.2rem " +
      color(background)
        .lighten(0.15)
        .fade(0.5)
  }
};

const primaryButtonLinkStyles = {
  ...buttonLinkStyles,
  justifyContent: "center",
  borderColor: theme.colors.border,
  color: theme.colors.white,
  backgroundColor: theme.colors.primary
};

const BtnLink = ({ className, style, ...rest }) => (
  <JBLink
    style={{ ...buttonLinkStyles, ...style }}
    className={`${className} btn`}
    {...rest}
  />
);

export const ButtonLink = Radium(BtnLink);

export const PrimaryButtonLink = ({ className, style, ...rest }) => (
  <JBLink
    style={{ ...primaryButtonLinkStyles, ...style }}
    className={`${className} btn-link`}
    {...rest}
  />
);

export default Radium(JBLink);
