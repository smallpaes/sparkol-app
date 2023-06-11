import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthLayoutContainer } from './auth-layout.styles';
import useIsAuthenticated from './hooks/useAuthenticateUser';

const AuthLayout: FC = () => {
  useIsAuthenticated();

  return (
    <AuthLayoutContainer>
      <Outlet />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
