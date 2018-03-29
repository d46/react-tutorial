import { SET_ANSWER, SET_CURRENT_ID } from "../actions";

const reducers = (state, action) => {
	console.log(state);

	switch (action.type) {
		case SET_ANSWER:
			const answers = state.answers.map(answer => {
				if (action.answer.id === answer.id) {
					answer.value = action.answer.value;
				}
				return answer;
			});
			state.answers = answers;
			break;
		case SET_CURRENT_ID:
			state.currentId = action.id;
			break;
	}

	return state;
};

export default reducers;
