function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      {/* <Progress max={numQuestions} value={index + Number(answer)} /> */}

      <p>
        Question <strong>{index}</strong>/{numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
