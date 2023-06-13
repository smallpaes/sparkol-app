import useIsValidPassword from './useIsValidPassword';
import useIsValidUserName from './useIsValidUserName';

const useIsValidForm = () => {
  const isUserNameValid = useIsValidUserName();
  const isPasswordValid = useIsValidPassword();
  return isUserNameValid && isPasswordValid;
};

export default useIsValidForm;
