import { FC, useState, useEffect } from 'react';
import FormInput from '../../components/form-input/form-input.component';

import {
  LogInContainer,
  LogInForm,
  LogInFormLegend,
  LoginFormFieldSet,
} from './log-in.styles';

const USER_NAME_REGEX = /.+/;
const PASSWORD_REGEX = /.+/;

const LogIn: FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    const isUserNameValid = USER_NAME_REGEX.test(userName.trim());
    setIsUserNameValid(isUserNameValid);
  }, [userName]);

  useEffect(() => {
    const isPasswordValid = PASSWORD_REGEX.test(password.trim());
    setIsPasswordValid(isPasswordValid);
  }, [password]);

  return (
    <LogInContainer>
      <LogInForm>
        <LoginFormFieldSet>
          <LogInFormLegend>Log In</LogInFormLegend>
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
            required
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
            required
            placeholder="Password"
            autoComplete="password"
          />
        </LoginFormFieldSet>
      </LogInForm>
    </LogInContainer>
  );
};

export default LogIn;
