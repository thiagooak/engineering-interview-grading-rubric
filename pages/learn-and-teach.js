import Criteria from "../components/criteria";
import Results from "../components/results";
import rubric from "../data/rubric";
import grade from "../data/grade";
import questions from "../data/questions";
import {
  CSSBaseline,
  ZEITUIProvider,
  Collapse,
  Text,
  Link,
} from "@zeit-ui/react";
import { Github } from "@zeit-ui/react-icons";

function NameThis() {
  const rubricLearnAndTeach = rubric()[1];
  const grades = grade();
  const qs = questions();

  return rubricLearnAndTeach.questions.map((question) => (
    <div key={question.gradeKey}>
      <Text h3>{question.title}</Text>
      <div>{question.description}</div>
      <Text h4>Sample Questions</Text>
      <ul>
        {qs[question.gradeKey].map((q) => (
          <li>{q}</li>
        ))}
      </ul>
      <Text h4>Grading</Text>
      <table>
        {grades[question.gradeKey].map((g) => (
          <tr key={g.name}>
            <td style={{ minWidth: "150px" }}>
              <strong>{g.name}</strong>
            </td>
            <td>{g.description}</td>
          </tr>
        ))}
      </table>
    </div>
  ));
}

function Page() {
  return (
    <>
      <ZEITUIProvider>
        <CSSBaseline />
        <div style={{ padding: "0 10px" }}>
          <Text h1>Ability to learn and teach</Text>
          <NameThis />
        </div>
      </ZEITUIProvider>
      <script
        src="https://cdn.usefathom.com/script.js"
        site="ZBBGRGJE"
        honor-dnt="true"
        included-domains="rubric.thiagocarvalho.net"
        defer
      ></script>
    </>
  );
}

export default Page;
