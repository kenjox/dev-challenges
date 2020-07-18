import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

import { StyledButton } from './StyledButtons';

const Button = (props) => {
  const { title } = props;
  return (
    <StyledButton {...props}>
      <span>{title}</span>
    </StyledButton>
  );
};

Button.defaultProps = {
  title: 'Default',
};

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  disabled: PropTypes.bool,
  disableShadow: PropTypes.bool,
};

export { Button };
