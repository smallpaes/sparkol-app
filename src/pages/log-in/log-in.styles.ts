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
  padding: 1.5rem;
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
  display: flex;
  flex-direction: column;
`;

export const LogInFormWarningMessage = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const LogInFormLegend = styled.legend`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  text-align: center;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const LogInInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;
