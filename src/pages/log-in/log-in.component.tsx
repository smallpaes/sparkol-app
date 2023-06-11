import { FC, useState, useMemo } from 'react';

import usePostData from '../../hooks/usePostData';
import { LOGIN_ENDPOINT } from '../../apis/endpoints/auth';
import FormInput from '../../components/form-input/form-input.component';
import { ButtonType } from '../../components/button/button.component';
import Button from '../../components/button/button.component';
import {
  LogInContainer,
  LogInForm,
  LogInFormLegend,
  LoginFormFieldSet,
  LogInFormWarningMessage,
  LogInInputGroup,
} from './log-in.styles';
import { LogInResponse, LogInData } from './type';

const USER_NAME_REGEX = /.+/;
const PASSWORD_REGEX = /.+/;

const LogIn: FC = () => {
  const [postData, isLoading, error] = usePostData();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isUserNameValid = useMemo(
    () => USER_NAME_REGEX.test(userName.trim()),
    [userName],
  );
  const isPasswordValid = useMemo(
    () => PASSWORD_REGEX.test(password.trim()),
    [password],
  );

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isUserNameValid || !isPasswordValid) return;
    try {
      const response = await postData<LogInData, LogInResponse>(
        LOGIN_ENDPOINT,
        {
          username: userName,
          password,
        },
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
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
