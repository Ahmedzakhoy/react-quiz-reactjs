function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const correctAnswerClass =
          hasAnswered && index === question.correctOption ? "correct" : "";
        const wrongAnswerCLass =
          answer === index && answer !== question.correctOption ? "wrong" : "";
        return (
          <button
            className={`btn btn-option ${
              index === answer ? "answer" : ""
            } ${correctAnswerClass} ${wrongAnswerCLass}`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
