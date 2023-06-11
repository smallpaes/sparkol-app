import usePostData from '../../../hooks/usePostData';
import useIsValidForm from './useIsValidForm';
import { LOGIN_ENDPOINT } from '../../../apis/endpoints/auth';
import { LogInResponse, LogInData } from '../log-in.types';
import setTokenToLocalStorage from '../helpers/setTokenToLocalStorage';

const useLogin = (
  userName: string,
  password: string,
): {
  login: () => Promise<void>;
  error: string | null;
  isLoading: boolean;
} => {
  const { postData, error, isLoading } = usePostData();
  const isValidForm = useIsValidForm(userName, password);
  const login = async (): Promise<void> => {
    if (!isValidForm) return;
    const data = await postData<LogInData, LogInResponse>(LOGIN_ENDPOINT, {
      username: userName,
      password,
    });
    if (!data) return;
    const { token } = data;
    setTokenToLocalStorage(token);
  };
  return { login, error, isLoading };
};

export default useLogin;
