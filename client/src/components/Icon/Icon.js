import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import Theme from '../../theme';

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const Icon = (props) => {
  const { icon } = Theme;
  const themeIconClass = icon.className ? `${icon.className} ` : '';
  const themeIconPrefix = icon.prefix ? `${icon.prefix + props.icon} ` : '';
  const iconClassName = themeIconClass + themeIconPrefix + (props.className ? props.className : '');

  return <i className={iconClassName} style={props.style} />;
};

Icon.propTypes = propTypes;

export default Radium(Icon);
