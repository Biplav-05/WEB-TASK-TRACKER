declare type AccessState = {
  accessToken: string;
  userProfile: UserProfile | null;
};
declare type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
};
declare type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
declare type GoogleLoginRequest = {
  access_token: string;
};
declare type EmailLoginRequest = {
  email: string;
  password: string;
};
declare type JsonAPISuccessResp<T> = {
  statusCode: number;
  message: string;
  success: boolean;
  data: T;
};
declare type JsonAPIErrorResp = {
  statusCode: number;
  success: boolean;
  message: string;
  errors: [];
};
declare type JsonAPIResp<T> = JsonAPISuccessResp<T> | JsonAPIErrorResp;
