import { SET_ANSWER, SET_PREV_ID, SET_NEXT_ID } from "../actions";

const reducers = (state, action) => {
	switch (action.type) {
		case SET_ANSWER:
			const answers = state.answers.map(answer => {
				if (action.answer.id === answer.id) {
					answer.value = action.answer.value;
				}
				return answer;
			});
			state = Object.assign({}, state, {
				answers: answers
			});
			break;
		case SET_PREV_ID:
			let indexOfCurrP = state.questions.findIndex(i => {
				return i.id === state.currentId;
			});
			state = Object.assign({}, state, {
				currentId: state.questions[--indexOfCurrP].id
			});
			break;
		case SET_NEXT_ID:
			let indexOfCurrN = state.questions.findIndex(i => {
				return i.id === state.currentId;
			});
			state = Object.assign({}, state, {
				currentId: state.questions[++indexOfCurrN].id
			});
			break;
	}

	return state;
};

export default reducers;
