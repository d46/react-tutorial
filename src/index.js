import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ProgressBar from "./containers/ProgressBar";
import Question from "./containers/Question";
import DevTools from "./DevTools"
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ProgressBar />
      <Question />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root")
);
