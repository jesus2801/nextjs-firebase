export interface LoginState {
  mail: string;
  password: string;
}

export interface SignupState extends LoginState {
  name: string;
}

export interface ProductState {
  name: string;
  company: string;
  url: string;
  description: string;
  price: number;
  category: string;
}
