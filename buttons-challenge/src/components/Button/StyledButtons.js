import styled, { css, createGlobalStyle } from 'styled-components';

// Variant prop. type e.g outline or text
const variantStyle = css`
  ${({ variant }) => {
    if (variant === 'outline') {
      return css`
        background-color: white;
        box-shadow: none;
        border: 1px solid #3d5afe;
        color: #3d5afe;

        &:hover,
        &:focus {
          outline: #3d5afe;
          background-color: rgba(61, 90, 254, 0.1);
        }
      `;
    }

    if (variant === 'text') {
      return css`
        background: none;
        box-shadow: none;
        color: #3d5afe;
        &:hover,
        &:focus {
          background-color: rgba(61, 90, 254, 0.1);
        }
      `;
    }
  }}
`;

// color props for background color setting
const backgroundColorStyle = css`
  ${({ color }) => {
    if (color === 'primary')
      return css`
        background-color: #2962ff;
        outline: #2962ff;
        color: white;
        &:hover,
        &:focus {
          background-color: #0039cb;
        }
      `;
    if (color === 'secondary')
      return css`
        background-color: #455a64;
        outline: #455a64;
        color: white;
        &:hover,
        &:focus {
          background-color: #1c313a;
        }
      `;
    if (color === 'danger')
      return css`
        background-color: #d32f2f;
        outline: #d32f2f;
        color: white;
        &:hover,
        &:focus {
          background-color: #9a0007;
        }
      `;
  }}
`;

// Size prop. type e.g sm: small, md: medium or lg: large
const sizeStyle = css`
  ${({ size }) => {
    if (size === 'sm')
      return css`
        width: 73px;
        height: 32px;
      `;
    if (size === 'md')
      return css`
        width: 81px;
        height: 36px;
      `;
    if (size === 'lg')
      return css`
        width: 93px;
        height: 42px;
      `;
  }}
`;

const GlobalButtonStyle = createGlobalStyle`
  .btn-children {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-icon {
    margin: 0 5px;
  }
`;

//Disabled prop
const disabledStyle = css`
  ${({ disabled, variant }) => {
    if (disabled && variant === 'text') {
      return css`
        &:disabled {
          background-color: inherit;
          color: #9e9e9e;
          cursor: not-allowed;
        }
      `;
    }
  }}
`;
const StyledButton = styled.button`
  padding: 8px 16px;
  height: 36px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: ${({ disableShadow }) =>
    disableShadow ? 'none' : '0px 2px 3px rgba(51, 51, 51, 0.2)'};
  font-size: 14px;
 
  &:hover,
  &:focus {
    outline: #aeaeae;
    background-color: #aeaeae;
  }

  &:disabled {
   background-color: #e0e0e0;
   cursor: not-allowed;
  }
  
  ${variantStyle}
  ${backgroundColorStyle}
  ${sizeStyle}
  ${disabledStyle}

  ${({ startIcon }) => {
    if (startIcon) {
      return css`
        .btn-title {
          order: 2;
        }
      `;
    }
  }}

`;

export { StyledButton, GlobalButtonStyle };
