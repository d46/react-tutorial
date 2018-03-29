import { connect } from "react-redux";
import { SET_ANSWER, SET_NEXT_ID, SET_PREV_ID } from "../actions";

import Question from "../components/Question";

const mapStateToProps = state => ({
	question: state.questions.find(i => i.id === state.currentId),
	answer: state.answers.find(i => i.id === state.currentId) || {},
	lastId: [...state.questions].pop().id,
	firstId: [...state.questions].shift().id
});

const mapDispatchToProps = {
	setAnswer: answer => ({
		type: SET_ANSWER,
		answer
	}),
	prevQuestion: () => ({
		type: SET_PREV_ID
	}),
	nextQuestion: () => ({
		type: SET_NEXT_ID
	})
};

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
	Question
);

export default QuestionContainer;
