import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthLayoutContainer } from './auth-layout.styles';
import useAuthenticateUser from './hooks/useAuthenticateUser';

const AuthLayout: FC = () => {
  useAuthenticateUser();
  return (
    <AuthLayoutContainer>
      <Outlet />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
