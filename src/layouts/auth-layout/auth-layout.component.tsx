import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AuthLayoutContainer } from './auth-layout.styles';
import useUserAuthenticated from './hooks/useUserAuthenticated';

const AuthLayout: FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isInitialized } = useUserAuthenticated();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isInitialized, navigate]);

  return (
    <AuthLayoutContainer>{isInitialized && <Outlet />}</AuthLayoutContainer>
  );
};

export default AuthLayout;
