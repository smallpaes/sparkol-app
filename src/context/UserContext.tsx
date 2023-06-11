import { createContext, FC, useState } from 'react';

import { User, IDefaultUser, IUserProvider } from '../types/user';

const defaultUser: IDefaultUser = {
  user: null,
  clearUser: () => undefined,
  setUser: () => undefined,
};

export const UserContext = createContext<IDefaultUser>(defaultUser);

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const clearUser = () => setUser(null);
  return (
    <UserContext.Provider value={{ user, clearUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
