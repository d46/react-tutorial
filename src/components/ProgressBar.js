import React, { Component } from "react";

const ProgressBar = props => {
  return (
    <div>
      <h1>Progress Bar</h1>
      {props.questions.map(q => <div key={Math.random()}>{q.id}</div>)}
    </div>
  );
};

export default ProgressBar;
