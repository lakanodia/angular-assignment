export interface IUser {
  id: number ;
  age: number;
  email: string;
  mobile: string;
  name: string;
  lastname: string;
}

export type INewUser = Pick<IUser, 'name' | 'lastname' | 'age' | 'email' | 'mobile'>;