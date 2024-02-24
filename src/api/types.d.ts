interface IJsonApi {
  get<T>(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = false
  ): Promise<JsonAPIResp<T>>;
  post<T, U>(
    path: string,
    body?: U,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = false
  ): Promise<JsonAPIResp<T>>;
  put<T, U>(
    path: string,
    body?: U,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = false
  ): Promise<JsonAPIResp<T>>;
  delete<T>(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = false
  ): Promise<JsonAPIResp<T>>;
}
