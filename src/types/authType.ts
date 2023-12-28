import UserType ,{ InitUser }from "./userType";

export interface LoginPayload {
    mail: string;
    password: string;
  }
  
  export interface SignUpPayload {
    email: string;
    password: string;
    name: string;
    phone: string;
  }
  
  export interface Token {
    token: string;
    expiredAt: string;
  }
  

type AuthType = {
    user: UserType;
    accessToken: string;
    refreshToken: string;
};

export const InitAuth = {
    user: InitUser,
    accessToken: '',
    refreshToken: ''
} as AuthType;

export default AuthType;
