import { useMemo } from 'react';

const PASSWORD_REGEX = /.+/;

const useIsValidPassword = (password: string) => {
  return useMemo(() => PASSWORD_REGEX.test(password.trim()), [password]);
};

export default useIsValidPassword;
