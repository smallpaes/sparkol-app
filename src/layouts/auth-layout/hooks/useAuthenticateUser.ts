import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../context/UserContext';
import useGetLocalToken from './useGetLocalToken';
import useGetLocalUser from './useGetLocalUser';
import useInitUser from './useInitUser';

const useAuthenticateUser = (): void => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const localToken = useGetLocalToken();
  const localUser = useGetLocalUser();
  const initUser = useInitUser();
  useEffect(() => {
    if (!user && !localToken) {
      navigate('/login');
    } else if (!user && localToken) {
      initUser({
        id: localUser?.id || -1,
        name: localUser?.name || 'User',
        token: localToken,
      });
    }
  }, [user, localToken, localUser, initUser, navigate]);
};

export default useAuthenticateUser;