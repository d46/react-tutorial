import React, { Component } from "react";
import Answers from "./answers";

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.answer.value || ""
		};

		this.onHandleChange = this.onHandleChange.bind(this);
		this.setAnswer = this.setAnswer.bind(this);
	}

	getAnswerType(type) {
		return Answers[type];
	}

	setAnswer() {
		this.props.setAnswer({
			id: this.props.question.id,
			value: this.state.value
		});
	}

	onHandleChange(e){
		const value = e.target.value;
		this.setState({
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
					id={question.id}
					options={question.options}
					value={this.state.value}
					onHandleChange={this.onHandleChange}
				/>
				{firstId !== question.id && (
					<button onClick={() => { this.props.prevQuestion(); this.setAnswer()}}>Prev</button>
				)}
				{lastId !== question.id && (
					<button onClick={() => { this.props.nextQuestion(); this.setAnswer()}}>Next</button>
				)}
			</div>
		);
	}
}

export default Question;
