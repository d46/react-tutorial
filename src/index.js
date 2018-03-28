import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ProgressBar from "./containers/ProgressBar";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ProgressBar />
  </Provider>,
  document.getElementById("root")
);
