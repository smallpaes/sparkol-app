import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../context/UserContext';

const useAuthenticateUser = (): void => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const isAuthenticated = user !== null;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
};

export default useAuthenticateUser;
