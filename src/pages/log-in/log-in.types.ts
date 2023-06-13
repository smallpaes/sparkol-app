import { ReactNode, SetStateAction, Dispatch } from 'react';
export interface User {
  name: string;
  id: number;
}

export interface LogInResponse {
  user: User;
  token: string;
}

export interface LogInData {
  username: string;
  password: string;
}

export type SetDataToLocalStorage = <T>(key: string, data: T) => void;

export interface IFormData extends LogInData {
  isUsernameTouched: boolean;
  isPasswordTouched: boolean;
}

export interface ILogInContextProps {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

export interface IUserProvider {
  children: ReactNode;
}
