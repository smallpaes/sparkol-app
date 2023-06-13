import { createContext, FC, useState } from 'react';

import { ILogInContextProps, IUserProvider, IFormData } from './log-in.types';

const defaultLogIn: ILogInContextProps = {
  formData: {
    username: '',
    password: '',
    isUsernameTouched: false,
    isPasswordTouched: false,
  },
  setFormData: () => undefined,
};

export const LogInContext = createContext<ILogInContextProps>(defaultLogIn);

export const LogInProvider: FC<IUserProvider> = ({ children }) => {
  const [formData, setFormData] = useState<IFormData>(defaultLogIn.formData);
  return (
    <LogInContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};
