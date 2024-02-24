import { IStorageClient } from "../storage/types";
import _ from "lodash";
export class API implements IJsonApi {
  private _storage: IStorageClient;
  private _BASE_URL: string;
  constructor(storage: IStorageClient, baseUrl: string) {
    this._storage = storage;
    this._BASE_URL = baseUrl;
  }
  private _buildHeaders(headers: Map<string, string>): Headers {
    const _headers = new Headers();
    headers.forEach((value, key) => {
      _headers.append(key, value);
    });
    return _headers;
  }
  private async _parseResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      if (response.status === 204) {
        return undefined as T;
      }
    }
    return response.json() as T;
  }
  private async _request<T, U>(
    method: string,
    path: string,
    headers: Map<string, string>,
    isAuthorized: boolean,
    body?: U
  ): Promise<JsonAPIResp<T>> {
    headers.set("Content-Type", "application/json");
    const _headers = this._buildHeaders(headers);
    if (isAuthorized) {
      const accessToken = await this._storage.getAccessToken();
      _headers.append("Authorization", `Bearer ${accessToken}`);
    }
    const requestOption: RequestInit = {
      method: method,
      headers: _headers,
    };
    if (!_.isUndefined(body)) {
      requestOption.body = JSON.stringify(body);
    }
    const response = await fetch(`${this._BASE_URL}/${path}`, requestOption);
    const apiResponse = await this._parseResponse<JsonAPIResp<T>>(response);
    return apiResponse;
  }
  get<T>(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = false
  ): Promise<JsonAPIResp<T>> {
    return this._request("GET", path, headers, isAuthorized);
  }
  post<T, U>(
    path: string,
    body?: U,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = false
  ): Promise<JsonAPIResp<T>> {
    return this._request("POST", path, headers, isAuthorized, body);
  }
  put<T, U>(
    path: string,
    body: U,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = false
  ): Promise<JsonAPIResp<T>> {
    return this._request("PUT", path, headers, isAuthorized, body);
  }
  delete<T>(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>> {
    return this._request("DELETE", path, headers, isAuthorized);
  }
}
