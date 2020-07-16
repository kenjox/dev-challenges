import React from 'react';
import PropTypes from 'prop-types';

import {
  DefaultStyledBtn,
  VariantStyledButton,
  DisableShadowStyledBtn,
  SizeStyledBtn,
  ColorStyledBtn,
} from './StyledButtons';

const Button = (props) => {
  const {
    title,
    variant,
    disableShadow,
    startIcon,
    endIcon,
    color,
    size,
  } = props;

  let btnElement = null;

  // Default button containing only title
  if (title) {
    btnElement = <DefaultStyledBtn {...props}>{title}</DefaultStyledBtn>;
  }

  // Variant button outline and text
  if (variant) {
    btnElement = <VariantStyledButton {...props}>{title}</VariantStyledButton>;
  }

  // DisableShadow button
  if (disableShadow) {
    btnElement = (
      <DisableShadowStyledBtn {...props}>{title}</DisableShadowStyledBtn>
    );
  }

  // Button with icons
  // TODO: implement icon support

  // Button color
  if (color) {
    console.log({ props });
    btnElement = <ColorStyledBtn {...props}>{title}</ColorStyledBtn>;
  }

  // Button sizes
  if (size) {
    btnElement = <SizeStyledBtn {...props}>{title}</SizeStyledBtn>;
  }

  return btnElement;
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
};

export { Button };
