import { useContext, useEffect, useCallback, useState } from 'react';

import { UserContext } from '../../../context/UserContext';
import getLocalUser from '../../../utils/getLocalUser';
import getLocalToken from '../../../utils/getLocalToken';
import useInitUser from './useInitUser';

const useUserAuthenticated = (): {
  isAuthenticated: boolean;
  isInitialized: boolean;
} => {
  const { user } = useContext(UserContext);
  const localToken = getLocalToken();
  const localUser = getLocalUser();
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
