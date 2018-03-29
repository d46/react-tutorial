import { createStore, compose } from "redux";

import reducers from "./reducers";
import DevTools from "./DevTools";

const questions = require("./questions.json");

const enhancer = compose(
	// Middleware you want to use in development:
	// applyMiddleware(d1, d2, d3),
	// Required! Enable Redux DevTools with the monitors you chose
	DevTools.instrument()
);

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

const store = createStore(reducers, initalData, enhancer);

export default store;
