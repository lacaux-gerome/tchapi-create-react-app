import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';

const renderApp = Component =>
  render(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('root')
  );

renderApp(App);

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NewApp = require("./containers/App").default;
    renderApp(NewApp);
  });
}
