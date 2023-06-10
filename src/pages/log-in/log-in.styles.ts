import styled from 'styled-components';

export const LogInContainer = styled.section`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
`;

export const LogInForm = styled.form`
  position: relative;
  max-width: 450px;
  margin: 100px auto 0 auto;
  background-color: ${({ theme }) => theme.colors.light[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  padding: 1rem;
  overflow: hidden;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    height: 0.2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LoginFormFieldSet = styled.fieldset`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LogInFormLegend = styled.legend`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  text-align: center;
  color: ${({ theme }) => theme.colors.tertiary};
  padding: 0.5rem;
`;
