export class Repository implements IRepository {
  private _api: IJsonApi;
  constructor(api: IJsonApi) {
    this._api = api;
  }

  private _getResponse<T>(response: JsonAPIResp<T>) {
    return "data" in response
      ? response.data
      : "errors" in response
      ? response
      : undefined;
  }
  async registerUser(
    data: EmailLoginRequest
  ): Promise<LoginResponse | JsonAPIErrorResp | undefined> {
    const response = await this._api.post<LoginResponse, EmailLoginRequest>(
      "path",
      data,
      undefined,
      false
    );
    return this._getResponse<LoginResponse>(response);
  }
  async requestGoogleLogin(
    google_token: GoogleLoginRequest
  ): Promise<LoginResponse | JsonAPIErrorResp | undefined> {
    const response = await this._api.post<LoginResponse, GoogleLoginRequest>(
      "path",
      google_token,
      undefined,
      false
    );
    return this._getResponse<LoginResponse>(response);
  }
  async requestEmailLogin(
    data: EmailLoginRequest
  ): Promise<LoginResponse | JsonAPIErrorResp | undefined> {
    const response = await this._api.post<LoginResponse, EmailLoginRequest>(
      "path",
      data,
      undefined,
      false
    );
    return this._getResponse<LoginResponse>(response);
  }
}
