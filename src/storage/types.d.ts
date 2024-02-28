export declare interface IStorageClient {
  getAccessToken(): Promise<string?>;
  getRefreshToken(): Promise<string?>;
  setAccessToken(access_token: string): Promise<void>;
  setRefreshToken(refresh_token: string): Promise<void>;
  clearTokens(): Promise<void>;
}
