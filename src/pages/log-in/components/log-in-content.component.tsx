import { useContext } from 'react';

import FormInput from '../../../components/form-input/form-input.component';
import { ButtonType } from '../../../components/button/button.types';
import Button from '../../../components/button/button.component';
import {
  LogInContainer,
  LogInForm,
  LogInFormLegend,
  LoginFormFieldSet,
  LogInFormWarningMessage,
  LogInInputGroup,
} from '../log-in.styles';
import useIsValidPassword from '../hooks/useIsValidPassword';
import useIsValidUserName from '../hooks/useIsValidUserName';
import useLogin from '../hooks/useLogin';
import { LogInContext } from '../log-in.context';

const LogInContent = () => {
  const { formData, setFormData } = useContext(LogInContext);
  const isUserNameValid = useIsValidPassword();
  const isPasswordValid = useIsValidUserName();
  const { login, error, isLoading } = useLogin();
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };
  return (
    <LogInContainer>
      <LogInForm data-testid="log-in-content-form" onSubmit={handleFormSubmit}>
        <LoginFormFieldSet disabled={isLoading}>
          <LogInFormLegend>Log In</LogInFormLegend>
          {error && (
            <LogInFormWarningMessage data-testid="log-in-content-warning-message">
              {error}
            </LogInFormWarningMessage>
          )}
          <LogInInputGroup>
            <FormInput
              isTouched={formData.isUsernameTouched}
              isInvalid={!isUserNameValid}
              invalidMessage="Please enter your user name"
              type="text"
              name="User Name"
              id="userName"
              value={formData.username}
              aria-invalid={!isUserNameValid}
              onChange={({ target: { value } }) =>
                setFormData({ ...formData, username: value })
              }
              onBlur={() =>
                setFormData({ ...formData, isUsernameTouched: true })
              }
              data-testid="log-in-username-input"
            />
            <FormInput
              isTouched={formData.isPasswordTouched}
              isInvalid={!isPasswordValid}
              invalidMessage="Please enter your password"
              type="password"
              name="Password"
              id="password"
              value={formData.password}
              aria-invalid={!isPasswordValid}
              onChange={({ target: { value } }) =>
                setFormData({ ...formData, password: value })
              }
              onBlur={() =>
                setFormData({ ...formData, isPasswordTouched: true })
              }
              autoComplete="password"
              data-testid="log-in-content-password-input"
            />
          </LogInInputGroup>
          <Button
            buttonType={ButtonType.PRIMARY}
            isOutlined={false}
            disabled={isLoading}
            type="submit"
            data-testid="log-in-content-submit-button"
          >
            Log in
          </Button>
        </LoginFormFieldSet>
      </LogInForm>
    </LogInContainer>
  );
};

export default LogInContent;
