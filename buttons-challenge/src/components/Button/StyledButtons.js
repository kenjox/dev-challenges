import styled, { css } from 'styled-components';

const DefaultStyledBtn = styled.button`
  padding: 8px 16px;
  height: 36px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(51, 51, 51, 0.2);
  font-size: 14px;
  font-style: medium;
  &:hover,
  &:focus {
    background-color: #aeaeae;
    outline: 0;
  }
  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    box-shadow: none;
  }
`;

const VariantStyledButton = styled(DefaultStyledBtn)`
  ${({ variant }) =>
    variant &&
    variant === 'outline' &&
    css`
      border: 1px solid #3d5afe;
      outline-color: #3d5afe;
      background-color: #ffffff;
      color: #3d5afe;

      &:hover,
      &:focus {
        background-color: rgba(41, 98, 255, 0.1);
      }
    `}
  ${({ variant }) =>
    variant &&
    variant === 'text' &&
    css`
      border: none;
      background-color: inherit;
      box-shadow: unset;
      color: #3d5afe;
      &:hover,
      &:focus {
        background-color: rgba(41, 98, 255, 0.1);
      }
      &:disabled {
        border: none;
        background-color: inherit;
        box-shadow: unset;
      }
    `}
`;

const DisableShadowStyledBtn = styled(DefaultStyledBtn)`
  ${({ disableShadow }) =>
    disableShadow &&
    css`
      border: none;
      background-color: #3d5afe;
      box-shadow: none;
      color: #ffffff;
      &:hover,
      &:focus {
        border: 1px solid #3d5afe;
        background-color: rgba(61, 90, 254, 1);
      }
    `}
`;

const SizeStyledBtn = styled(DefaultStyledBtn)`
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          width: 73px;
          height: 32px;
        `;
      case 'md':
        return css`
          width: 81px;
          height: 36px;
        `;
      case 'lg':
        return css`
          width: 93px;
          height: 42px;
        `;
      default:
        return;
    }
  }}
`;

const ColorStyledBtn = styled(DefaultStyledBtn)`
  ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          background-color: #2962ff;
          color: #ffffff;
          &:hover,
          &:focus {
            background-color: #0039cb;
          }
        `;
      case 'secondary':
        return css`
          background-color: #455a64;
          color: #ffffff;
          &:hover,
          &:focus {
            background-color: #1c313a;
          }
        `;
      default:
        return css`
          background-color: #e0e0e0;
          &:hover,
          &:focus {
            background-color: #aeaeae;
          }
        `;
    }
  }}
`;

export {
  DefaultStyledBtn,
  VariantStyledButton,
  SizeStyledBtn,
  ColorStyledBtn,
  DisableShadowStyledBtn,
};
