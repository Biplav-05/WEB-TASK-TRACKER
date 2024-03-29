import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RepositoryContext } from "./context/RepositoryContext.tsx";
import { Provider } from "react-redux";
import { TaskTrackerStore } from "./redux/store.ts";

const client_id = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={client_id}>
      <RepositoryContext>
        <Provider store={TaskTrackerStore}>
          <App />
        </Provider>
      </RepositoryContext>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
