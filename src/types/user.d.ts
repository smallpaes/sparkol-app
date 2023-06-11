import { ReactNode } from 'react';

export interface User {
  id: number;
  name: string;
  token: string;
}

export interface IDefaultUser {
  user: User | null;
  clearUser: () => void;
  setUser: (user: User | null) => void;
}

export interface IUserProvider {
  children: ReactNode;
}
