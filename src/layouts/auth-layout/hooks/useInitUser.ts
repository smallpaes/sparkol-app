import { useContext } from 'react';

import { UserContext } from '../../../context/UserContext';
import { User } from '../../../types/user';

const useInitUser = () => {
  const { setUser } = useContext(UserContext);
  return (user: User): void => {
    setUser(user);
  };
};
export default useInitUser;
