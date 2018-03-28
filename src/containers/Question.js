import Question from "../components/Question";

const mapStateToProps = state => ({
  questions: state.questions[state.index]
});

const QuestionContainer = connect(mapStateToProps)(Question);

export default QuestionContainer;
