import Criteria from "../components/criteria";
import Results from "../components/results";
import rubric from "../data/rubric";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problemSolvingGrade: "N/A",
      codeFluencyGrade: "N/A",
      autonomyGrade: "N/A",
      basicComputerScienceKnowledgeGrade: "N/A",
      systemDesignGrade: "N/A",
      resolutenessGrade: "N/A",
      curiosityGrade: "N/A",
      awarenessGrade: "N/A",
      empathyGrade: "N/A",
      communicationGrade: "N/A",
      collaborationGrade: "N/A",
      perspectiveGrade: "N/A",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const rubricBuildSoftware = rubric()[0];
    const rubricLearnAndTeach = rubric()[1];
    const buildSoftware = rubricBuildSoftware["questions"].map((crit) => (
      <Criteria
        handleInputChange={this.handleInputChange}
        gradeValue={this.state.problemSolvingGrade}
        title={crit.title}
        gradeKey={crit.gradeKey}
      >
        {crit.description}
      </Criteria>
    ));

    const learnAndTeach = rubricLearnAndTeach["questions"].map((crit) => (
      <Criteria
        handleInputChange={this.handleInputChange}
        gradeValue={this.state.problemSolvingGrade}
        title={crit.title}
        gradeKey={crit.gradeKey}
      >
        {crit.description}
      </Criteria>
    ));

    return (
      <>
        <Results state={this.state} />

        <div style={{ maxWidth: "720px" }}>
          <h1>{rubricBuildSoftware.title}</h1>
          <p>{rubricBuildSoftware.description}</p>

          {buildSoftware}

          <h1>{rubricLearnAndTeach.title}</h1>
          <p>{rubricLearnAndTeach.description}</p>

          {learnAndTeach}
        </div>
      </>
    );
  }
}

function Page() {
  return (
    <div>
      <h1>Engineering Interview Grading Rubric</h1>
      <p>
        Based on{" "}
        <a href="https://medium.engineering/engineering-interviews-grading-rubric-8b409bec021f">
          Medium's engineering interview grading rubric
        </a>
      </p>
      <Form />
    </div>
  );
}

export default Page;
