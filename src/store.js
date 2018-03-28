import { createStore } from "redux";
import reducers from "./reducers";

const initalData = {
  questions: [1, 2, 3, 4]
};

const store = createStore(reducers, initalData);

export default store;
