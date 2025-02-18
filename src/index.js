import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import configureStore from "./state/store/configureStore";
import { verifyCredentials } from "./state/actions/reduxTokenAuthConfig";

const store = configureStore();
verifyCredentials(store);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
