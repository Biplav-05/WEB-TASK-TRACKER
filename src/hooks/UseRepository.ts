import { useContext } from "react";
import { Context } from "../context/RepositoryContext";

export function useRepository() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useRepository must be used within a repository provider");
  }
  return context;
}
