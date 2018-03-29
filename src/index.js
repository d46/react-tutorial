import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ProgressBar from "./containers/ProgressBar";
import Question from "./containers/Question";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ProgressBar />
      <Question />
    </div>
  </Provider>,
  document.getElementById("root")
);
