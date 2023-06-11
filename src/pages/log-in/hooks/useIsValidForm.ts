import useIsValidPassword from './useIsValidPassword';
import useIsValidUserName from './useIsValidUserName';

const useIsValidForm = (userName: string, password: string) => {
  const isUserNameValid = useIsValidUserName(userName);
  const isPasswordValid = useIsValidPassword(password);
  return isUserNameValid && isPasswordValid;
};

export default useIsValidForm;
