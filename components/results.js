import rubric from "../data/rubric";

export default function Results({ state }) {
  return (
    <div>
      <h1>Results</h1>
      <div>
        {rubric().map((cat) => {
          return (
            <>
              <p>{cat.title}</p>
              {cat.questions.map((ques) => (
                <>
                  <p>
                    {ques.title}:{" "}
                    <strong>{state[ques.gradeKey + "Grade"]}</strong>
                  </p>

                  <p>{state[ques.gradeKey + "Note"]}</p>
                </>
              ))}
            </>
          );
        })}
      </div>
    </div>
  );
}
