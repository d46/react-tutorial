import { createStore } from "redux";

import reducers from "./reducers";

const questions = require("./questions.json");

const initalData = {
	currentId: 0,
	answers: [
		{
			id: 1,
			value: "Kim?"
		}
	],
	questions
};

const store = createStore(reducers, initalData);

export default store;
