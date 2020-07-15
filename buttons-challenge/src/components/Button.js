import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/*
sm: 73x32
md: 81x36
lg: 93x42
*/
const DefaultButton = styled.button`
  width: 81px;
  height: 36px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(51, 51, 51, 0.2);
  font-size: 14px;

  &:hover,
  &:focus {
    background-color: #aeaeae;
    outline: 0;
  }
  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
  }
`;
const Button = (props) => {
  const { title } = props;
  return (
    <DefaultButton {...props}>
      {props.children}
      {title}
    </DefaultButton>
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
};

export { Button };
