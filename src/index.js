import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./asset/locale/i18n";
import AppProvider from "./context/appContext";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AppProvider>
      <App />
    </AppProvider>
  </I18nextProvider>,
  document.getElementById("root")
);
