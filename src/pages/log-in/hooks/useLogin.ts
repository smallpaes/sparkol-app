import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import usePostData from '../../../hooks/usePostData';
import useIsValidForm from './useIsValidForm';
import { LOGIN_ENDPOINT } from '../../../apis/endpoints/auth';
import { LogInResponse, LogInData } from '../log-in.types';
import setTokenToLocalStorage from '../helpers/setTokenToLocalStorage';
import { UserContext } from '../../../context/UserContext';

const useLogin = (
  userName: string,
  password: string,
): {
  login: () => Promise<void>;
  error: string | null;
  isLoading: boolean;
} => {
  const { postData, error, isLoading } = usePostData();
  const { setUser } = useContext(UserContext);
  const isValidForm = useIsValidForm(userName, password);
  const navigate = useNavigate();
  const login = async (): Promise<void> => {
    if (!isValidForm) return;
    const data = await postData<LogInData, LogInResponse>(LOGIN_ENDPOINT, {
      username: userName,
      password,
    });
    if (!data) return;
    const { token, user } = data;
    setTokenToLocalStorage(token);
    setUser({ ...user, token });
    navigate('/');
  };
  return { login, error, isLoading };
};

export default useLogin;
