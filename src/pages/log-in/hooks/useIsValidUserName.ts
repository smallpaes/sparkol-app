import { useMemo } from 'react';

const USER_NAME_REGEX = /.+/;

const useIsValidUserName = (userName: string) => {
  return useMemo(() => USER_NAME_REGEX.test(userName.trim()), [userName]);
};

export default useIsValidUserName;
