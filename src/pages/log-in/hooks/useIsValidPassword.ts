import { useMemo, useContext } from 'react';

import { LogInContext } from '../log-in.context';

const PASSWORD_REGEX = /.+/;

const useIsValidPassword = () => {
  const {
    formData: { password },
  } = useContext(LogInContext);
  return useMemo(() => PASSWORD_REGEX.test(password.trim()), [password]);
};

export default useIsValidPassword;
