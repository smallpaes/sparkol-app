import { useMemo, useContext } from 'react';

import { LogInContext } from '../log-in.context';

const USER_NAME_REGEX = /.+/;

const useIsValidUserName = () => {
  const {
    formData: { username },
  } = useContext(LogInContext);
  return useMemo(() => USER_NAME_REGEX.test(username.trim()), [username]);
};

export default useIsValidUserName;
