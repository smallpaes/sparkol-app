import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import usePostData from '../../../hooks/usePostData';
import useIsValidForm from './useIsValidForm';
import { LOGIN_ENDPOINT } from '../../../apis/endpoints/auth';
import { LogInResponse, LogInData } from '../log-in.types';
import setTokenToLocalStorage from '../helpers/setTokenToLocalStorage';
import setUserToLocalStorage from '../helpers/setUserToLocalStorage';
import { UserContext } from '../../../context/UserContext';
import { LogInContext } from '../log-in.context';

import setDataToLocalStorage from '../helpers/setDataToLocalStorage';

const useLogin = (): {
  login: () => Promise<void>;
  error: string | null;
  isLoading: boolean;
} => {
  const {
    formData: { username, password },
  } = useContext(LogInContext);
  const { postData, error, isLoading } = usePostData();
  const { setUser } = useContext(UserContext);
  const isValidForm = useIsValidForm();
  const navigate = useNavigate();
  const login = async (): Promise<void> => {
    if (!isValidForm) return;
    const data = await postData<LogInData, LogInResponse>(LOGIN_ENDPOINT, {
      username,
      password,
    });
    if (!data) return;
    const { token, user } = data;
    setTokenToLocalStorage(token, setDataToLocalStorage);
    setUserToLocalStorage(user, setDataToLocalStorage);
    setUser({ ...user, token });
    navigate('/');
  };
  return { login, error, isLoading };
};

export default useLogin;
