import { useContext, useEffect, useCallback, useState } from 'react';

import { UserContext } from '../../../context/UserContext';
import useGetLocalToken from './useGetLocalToken';
import useGetLocalUser from './useGetLocalUser';
import useInitUser from './useInitUser';

const useUserAuthenticated = (): {
  isAuthenticated: boolean;
  isInitialized: boolean;
} => {
  const { user } = useContext(UserContext);
  const localToken = useGetLocalToken();
  const localUser = useGetLocalUser();
  const initUser = useInitUser();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const authenticateUser = useCallback(() => {
    if (!localUser || !localToken) {
      setIsAuthenticated(false);
      return;
    }
    if (!user) {
      initUser({
        id: localUser.id,
        name: localUser.name,
        token: localToken,
      });
    }
    setIsAuthenticated(true);
  }, [localToken, localUser, initUser, user]);

  useEffect(() => {
    authenticateUser();
    !isInitialized && setIsInitialized(true);
  }, [localToken, localUser, initUser, user, isInitialized, authenticateUser]);

  return { isAuthenticated, isInitialized };
};

export default useUserAuthenticated;
