import { IStorageClient } from "./types";

export class LocalStorageClient implements IStorageClient {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }
  async setAccessToken(access_token: string): Promise<void> {
    this.storage.setItem("access_token", access_token);
  }
  async setRefreshToken(refresh_token: string): Promise<void> {
    this.storage.setItem("refresh_token", refresh_token);
  }
  async getAccessToken(): Promise<string | null> {
    return this.storage.getItem("access_token");
  }
  async getRefreshToken(): Promise<string | null> {
    return this.storage.getItem("refresh_token");
  }
  async clearTokens(): Promise<void> {
    this.storage.clear();
  }
}
