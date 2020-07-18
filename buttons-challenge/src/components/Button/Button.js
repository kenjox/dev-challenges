import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

import { StyledButton, GlobalButtonStyle } from './StyledButtons';

const Button = (props) => {
  const { title, startIcon, endIcon } = props;
  return (
    <>
      <GlobalButtonStyle />
      <StyledButton {...props}>
        <div className="btn-children">
          <span className="btn-title">{title}</span>
          {startIcon && <Icon className="btn-icon">local_grocery_store</Icon>}
          {endIcon && <Icon className="btn-icon">local_grocery_store</Icon>}
        </div>
      </StyledButton>
    </>
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
