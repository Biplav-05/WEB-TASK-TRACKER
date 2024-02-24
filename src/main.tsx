import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RepositoryContext } from "./context/RepositoryContext.tsx";
import { Provider } from "react-redux";
import { taskTrackerStore } from "./redux/store.ts";

const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RepositoryContext>
        <Provider store={taskTrackerStore}>
          <App />
        </Provider>
      </RepositoryContext>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
