import rubric from "../data/rubric";
import { Table, Text } from "@zeit-ui/react";

export default function Results({ state }) {
  const filledBuildSoftware = rubric()[0].questions.filter(
    (question) => state[question.gradeKey + "Grade"] !== "N/A"
  );

  const unfilledBuildSoftware = rubric()[0].questions.filter(
    (question) => state[question.gradeKey + "Grade"] === "N/A"
  );

  const dataBuildSoftware = filledBuildSoftware.map((ques) => {
    return {
      competency: ques.title,
      grade: state[ques.gradeKey + "Grade"],
      note: state[ques.gradeKey + "Note"],
    };
  });

  const filledLearnAndTeach = rubric()[1].questions.filter(
    (question) => state[question.gradeKey + "Grade"] !== "N/A"
  );

  const unfilledLearnAndTeach = rubric()[1].questions.filter(
    (question) => state[question.gradeKey + "Grade"] === "N/A"
  );

  const dataLearnAndTeach = filledLearnAndTeach.map((ques) => {
    return {
      competency: ques.title,
      grade: state[ques.gradeKey + "Grade"],
      note: state[ques.gradeKey + "Note"],
    };
  });

  return (
    <>
      <Text>Ability to build software</Text>
      {filledBuildSoftware.length > 0 ? (
        <Table data={dataBuildSoftware}>
          <Table.Column prop="competency" label="competency" width="25%" />
          <Table.Column prop="grade" label="grade" width="20%" />
          <Table.Column prop="note" label="note" />
        </Table>
      ) : (
        <Text size={12} type="secondary">
          Add your answers below and this section will be updated
        </Text>
      )}

      <Text>Ability to learn and teach</Text>
      {filledLearnAndTeach.length > 0 ? (
        <Table data={dataLearnAndTeach}>
          <Table.Column prop="competency" label="competency" width="25%" />
          <Table.Column prop="grade" label="grade" width="20%" />
          <Table.Column prop="note" label="note" />
        </Table>
      ) : (
        <Text size={12} type="secondary">
          Add your answers below and this section will be updated
        </Text>
      )}
    </>
  );

  return (
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
  );
}
