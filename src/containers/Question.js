import { connect } from "react-redux";
import Question from "../components/Question";

const mapStateToProps = state => ({
  question: state.questions.find(i => i.id === state.currentId),
  answer: state.answers.find(i => i.id === state.currentId )
});

const QuestionContainer = connect(mapStateToProps)(Question);

export default QuestionContainer;
