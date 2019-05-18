import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import color from "color";
import Theme from "../../theme";
import Icon from "../Icon";

const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  dark: PropTypes.bool,
  text: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconRight: PropTypes.string,
  iconRightSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconTop: PropTypes.string,
  iconTopSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const Button = props => {
  let { colors } = Theme;

  if (props.theme) {
    colors = props.theme.colors;
  }

  let background;

  if (props.bgColor) {
    background = props.bgColor;
  } else {
    if (props.dark) {
      background = colors.dark;
    } else {
      background = colors.light;
    }
  }

  return (
    <button
      type="button"
      className={"btn " + props.className}
      onClick={props.onClick}
      disabled={props.disabled}
      style={[
        props.height && {
          height: props.height
        },
        props.width && {
          width: props.width
        },
        {
          color: props.textColor
            ? props.textColor
            : props.dark
            ? colors.light
            : colors.dark,
          borderColor: props.borderColor ? props.borderColor : background,
          backgroundColor: background,
          padding: Theme.buttons.padding,
          // TODO -> Move these style to a btn class to be shared with links (btn-fade?)
          ":hover": {
            backgroundColor: color(background).darken(0.15),
            borderColor: color(background).darken(0.15),
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
            boxShadow:
              "0 0 0 0.2rem " +
              color(background)
                .lighten(0.15)
                .fade(0.5)
          }
        },
        props.style
      ]}
    >
      {props.iconTop && (
        <Icon
          className="icon-top"
          icon={props.iconTop}
          style={[
            {
              display: "block",
              marginBottom: ".75rem"
            },
            props.iconTopSize && { fontSize: props.iconTopSize }
          ]}
        />
      )}

      {props.icon && (
        <Icon
          className="icon-left"
          icon={props.icon}
          style={{
            fontSize: props.iconSize || "1rem",
            ...props.iconStyle
          }}
        />
      )}

      {props.text}

      {props.iconRight && (
        <Icon
          className="icon-right"
          icon={props.iconRight}
          style={{
            fontSize: props.iconRightSize || "1rem",
            ...props.iconStyle
          }}
        />
      )}
    </button>
  );
};

Button.propTypes = propTypes;

export default Radium(Button);
