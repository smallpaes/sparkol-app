import setDataToLocalStorage from './helpers/setDataToLocalStorage';
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

export interface IField {
  value: string;
  isTouched: boolean;
}

export interface IFormData {
  userName: IField;
  password: IField;
}

export type SetDataToLocalStorage = <T>(key: string, data: T) => void;
