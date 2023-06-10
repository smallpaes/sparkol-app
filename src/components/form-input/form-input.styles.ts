import styled, { css } from 'styled-components';

export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const visuallyHiddenStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const FormInputLabel = styled.label<{
  $isHidden: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.tertiary};
  ${({ $isHidden }) => $isHidden && visuallyHiddenStyles}
`;

export const FormInputField = styled.input<{
  $isInvalid: boolean;
}>`
  border: 1px solid ${({ theme }) => theme.colors.light[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 0.375rem 0.75rem;
  transition: border-color 0.2s ease-in-out;

  ${({ $isInvalid, theme }) =>
    $isInvalid &&
    `
    border-color: ${theme.colors.primary};
  `}

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.light[200]};
  }
`;

export const FormInputMessage = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
