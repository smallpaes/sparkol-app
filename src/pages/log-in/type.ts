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
