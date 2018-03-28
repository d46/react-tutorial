import { createStore } from "redux";

import reducers from "./reducers";

const questions = require("./questions.json");

const initalData = {
  index: 0,
  answers: {},
  questions
};

const store = createStore(reducers, initalData);

export default store;
