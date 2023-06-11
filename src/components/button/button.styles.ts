import styled, { css } from 'styled-components';

import { ButtonType } from './button.types';

export const disabledStyles = css`
  cursor: not-allowed;
  border-color: ${({ theme }) => theme.colors.light[300]};
  background-color: ${({ theme }) => theme.colors.light[300]};
  color: ${({ theme }) => theme.colors.light[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.light[300]};
    color: ${({ theme }) => theme.colors.light[100]};
  }
`;

export const CustomButton = styled.button<{
  $isOutlined: boolean;
  $buttonType: ButtonType;
}>`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-color: ${({ theme, $buttonType }) => theme.colors[$buttonType]};
  background-color: ${({ theme, $isOutlined, $buttonType }) =>
    $isOutlined ? theme.colors.light[100] : theme.colors[$buttonType]};
  color: ${({ theme, $isOutlined, $buttonType }) =>
    $isOutlined ? theme.colors[$buttonType] : theme.colors.light[100]};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, $buttonType }) => theme.colors[$buttonType]};
    color: ${({ theme }) => theme.colors.light[100]};
    filter: ${({ $isOutlined }) => ($isOutlined ? 'none' : 'brightness(0.9)')};
  }

  &:disabled {
    ${disabledStyles}
  }
`;
