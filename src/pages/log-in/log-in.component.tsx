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

interface IField {
  value: string;
  isTouched: boolean;
}

interface IFormData {
  userName: IField;
  password: IField;
}

const LogIn: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    userName: {
      value: '',
      isTouched: false,
    },
    password: {
      value: '',
      isTouched: false,
    },
  });

  const updateFormData = (fieldName: keyof IFormData, value: IField) => {
    if (fieldName === undefined || value === undefined) return;
    if (formData[fieldName] === undefined) return;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const isUserNameValid = useIsValidPassword(formData.userName.value);
  const isPasswordValid = useIsValidUserName(formData.password.value);
  const { login, error, isLoading } = useLogin(
    formData.userName.value,
    formData.password.value,
  );

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  const handleInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof IFormData,
  ) => {
    const { value } = e.target;
    updateFormData(fieldName, {
      ...formData[fieldName],
      value,
    });
  };

  const handleInputTouched = (fieldName: keyof IFormData) => {
    updateFormData(fieldName, {
      ...formData[fieldName],
      isTouched: true,
    });
  };

  return (
    <LogInContainer>
      <LogInForm onSubmit={handleFormSubmit}>
        <LoginFormFieldSet disabled={isLoading}>
          <LogInFormLegend>Log In</LogInFormLegend>
          {error && <LogInFormWarningMessage>{error}</LogInFormWarningMessage>}
          <LogInInputGroup>
            <FormInput
              isTouched={formData.userName.isTouched}
              isInvalid={!isUserNameValid}
              invalidMessage="Please enter your user name"
              type="text"
              name="User Name"
              id="userName"
              value={formData.userName.value}
              aria-invalid={!isUserNameValid}
              onChange={(e) => handleInputValueChange(e, 'userName')}
              onBlur={() => handleInputTouched('userName')}
            />
            <FormInput
              isTouched={formData.password.isTouched}
              isInvalid={!isPasswordValid}
              invalidMessage="Please enter your password"
              type="password"
              name="Password"
              id="password"
              value={formData.password.value}
              aria-invalid={!isPasswordValid}
              onChange={(e) => handleInputValueChange(e, 'password')}
              onBlur={() => handleInputTouched('password')}
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
