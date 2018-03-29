import React, { Component } from "react";
import Answers from "./answers";

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.answer.value || ""
		};
		this.setAnswer = this.setAnswer.bind(this);
	}

	getAnswerType(type) {
		return Answers[type];
	}

	setAnswer(e) {
		const value = e.target.value;
		this.setState({
			value: value
		});
		this.props.setAnswer({
			id: this.props.question.id,
			value: value
		});
	}

	render() {
		const { question, firstId, lastId } = this.props;
		const AnswerType = this.getAnswerType(question.type);

		return (
			<div>
				<h1>{question.title}</h1>
				<AnswerType
					options={question.options}
					value={this.state.value}
					setAnswer={this.setAnswer}
				/>
				{firstId !== question.id && (
					<button onClick={this.props.prevQuestion}>Prev</button>
				)}
				{lastId !== question.id && (
					<button onClick={this.props.nextQuestion}>Next</button>
				)}
			</div>
		);
	}
}

export default Question;
