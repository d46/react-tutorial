import { createStore } from "redux";

import reducers from "./reducers";

const questions = require("./questions.json");

const initalData = {
	currentId: 2,
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
