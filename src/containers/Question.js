import { connect } from "react-redux";
import { SET_ANSWER } from "../actions";

import Question from "../components/Question";

const mapStateToProps = state => ({
	question: state.questions.find(i => i.id === state.currentId),
	answer: state.answers.find(i => i.id === state.currentId) || {},
	lastId: state.questions[state.questions.length - 1].id,
	firstId: state.questions[0].id
});

const mapDispatchToProps = {
	setAnswer: answer => ({
		type: SET_ANSWER,
		answer
  }),
  setCurrentId: id => ({
    type: SET_CURRENT_ID,
    id
  })
};

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
	Question
);

export default QuestionContainer;
