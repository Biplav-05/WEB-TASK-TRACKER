interface IRepository {
  requestGoogleLogin(
    access_token: GoogleLoginRequest
  ): Promise<LoginResponse | JsonAPIErrorResp | undefined>;
  requestEmailLogin(
    data: EmailLoginRequest
  ): Promise<LoginResponse | JsonAPIErrorResp | undefined>;
  registerUser(
    data: EmailLoginRequest
  ): Promise<LoginResponse | JsonAPIErrorResp | undefined>;
}
