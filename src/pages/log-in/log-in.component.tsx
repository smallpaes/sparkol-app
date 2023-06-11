import { FC, useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import { ButtonType } from '../../components/button/button.types';
import Button from '../../components/button/button.component';
import {
  LogInContainer,
  LogInForm,
  LogInFormLegend,
  LoginFormFieldSet,
  LogInFormWarningMessage,
  LogInInputGroup,
} from './log-in.styles';
import useIsValidPassword from './hooks/useIsValidPassword';
import useIsValidUserName from './hooks/useIsValidUserName';
import useLogin from './hooks/useLogin';

const LogIn: FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isUserNameValid = useIsValidPassword(userName);
  const isPasswordValid = useIsValidUserName(password);
  const { login, error, isLoading } = useLogin(userName, password);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <LogInContainer>
      <LogInForm onSubmit={handleFormSubmit}>
        <LoginFormFieldSet disabled={isLoading}>
          <LogInFormLegend>Log In</LogInFormLegend>
          {error && <LogInFormWarningMessage>{error}</LogInFormWarningMessage>}
          <LogInInputGroup>
            <FormInput
              isTouched={isUserNameTouched}
              isInvalid={!isUserNameValid}
              invalidMessage="Please enter your user name"
              type="text"
              name="User Name"
              id="userName"
              value={userName}
              aria-invalid={!isUserNameValid}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={() => setIsUserNameTouched(true)}
              placeholder="User name"
            />
            <FormInput
              isTouched={isPasswordTouched}
              isInvalid={!isPasswordValid}
              invalidMessage="Please enter your password"
              type="password"
              name="Password"
              id="password"
              value={password}
              aria-invalid={!isPasswordValid}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setIsPasswordTouched(true)}
              placeholder="Password"
              autoComplete="password"
            />
          </LogInInputGroup>
          <Button
            buttonType={ButtonType.PRIMARY}
            isOutlined={false}
            disabled={isLoading}
            type="submit"
          >
            Log in
          </Button>
        </LoginFormFieldSet>
      </LogInForm>
    </LogInContainer>
  );
};

export default LogIn;
