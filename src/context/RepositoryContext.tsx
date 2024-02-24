import { createContext } from "react";
import { LocalStorageClient } from "../storage/Storage";
import { IStorageClient } from "../storage/types";
import { API } from "../api/Api";
import { Repository } from "../repositories/Repository";
type repositoryContextProps = {
  repo: IRepository;
  storage: IStorageClient;
};
type contextProp = {
  children: React.ReactNode;
};
export const Context = createContext<repositoryContextProps | undefined>(
  undefined
);
export function RepositoryContext({ children }: contextProp) {
  const base_url: string = import.meta.env.VITE_BASE_URL;
  const storage: IStorageClient = new LocalStorageClient(window.localStorage);
  const api: IJsonApi = new API(storage, base_url);
  const repo: IRepository = new Repository(api);
  const contextValue: repositoryContextProps = {
    repo,
    storage,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
