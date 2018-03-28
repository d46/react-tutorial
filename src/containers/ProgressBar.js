import { connect } from "react-redux";
import ProgressBar from "../components/ProgressBar";

const mapStateToProps = state => ({
  questions: state.questions
});

const ProgressBarContainer = connect(mapStateToProps)(ProgressBar);

export default ProgressBarContainer;
