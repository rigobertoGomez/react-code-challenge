import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { client } from "./lib/apollo-client.lib";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { TasksContextProvider } from "./context/TasksContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
