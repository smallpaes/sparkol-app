import styled from 'styled-components';

export const LogInContainer = styled.section`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
`;

export const LogInForm = styled.form`
  max-width: 450px;
  margin: 100px auto 0 auto;
  background-color: ${({ theme }) => theme.colors.light[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  padding: 1rem;
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
`;
