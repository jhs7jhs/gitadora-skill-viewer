import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import App from "./react/App.jsx";

const { locale, messages } = JSON.parse(window.App);

const link = new HttpLink({
  uri: "/graphql"
});

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link,
  ssrForceFetchDelay: 100
});

hydrate(
  <ApolloProvider client={client}>
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
        <ThemeProvider theme={createMuiTheme()}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </IntlProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
