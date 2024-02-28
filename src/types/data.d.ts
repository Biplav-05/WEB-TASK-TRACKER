declare type AccessState = {
  access_token: string;
  user_profile: UserProfile | null;
};
declare type UserProfile = {
  first_name: string;
  last_name: string;
  email: string;
};
declare type LoginResponse = {
  access_token: string;
  refresh_token: string;
};
declare type GoogleLoginRequest = {
  google_token: string;
};
declare type EmailLoginRequest = {
  email: string;
  password: string;
};
declare type JsonAPISuccessResp<T> = {
  status_code: number;
  message: string;
  success: boolean;
  data: T;
};
declare type JsonAPIErrorResp = {
  status_code: number;
  success: boolean;
  message: string;
  errors: [];
};
declare type JsonAPIResp<T> = JsonAPISuccessResp<T> | JsonAPIErrorResp;
