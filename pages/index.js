import Criteria from "../components/criteria";
import Results from "../components/results";
import rubric from "../data/rubric";
import { CSSBaseline, ZEITUIProvider, Collapse, Text } from "@zeit-ui/react";

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

  handleInputChange(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const rubricBuildSoftware = rubric()[0];
    const rubricLearnAndTeach = rubric()[1];

    return (
      <>
        <Collapse.Group>
          <Collapse title="Results" initialVisible>
            <Results state={this.state} />
          </Collapse>
        </Collapse.Group>

        <h1>{rubricBuildSoftware.title}</h1>
        <p>{rubricBuildSoftware.description}</p>
        <Collapse.Group>
          {rubricBuildSoftware["questions"].map((crit) => (
            <Collapse title={crit.title}>
              <Criteria
                handleInputChange={this.handleInputChange}
                gradeValue={this.state.problemSolvingGrade}
                title={crit.title}
                gradeKey={crit.gradeKey}
              >
                {crit.description}
              </Criteria>
            </Collapse>
          ))}
        </Collapse.Group>

        <h1>{rubricLearnAndTeach.title}</h1>
        <p>{rubricLearnAndTeach.description}</p>
        <Collapse.Group>
          {rubricLearnAndTeach["questions"].map((crit) => (
            <Collapse title={crit.title}>
              <Criteria
                handleInputChange={this.handleInputChange}
                gradeValue={this.state.problemSolvingGrade}
                title={crit.title}
                gradeKey={crit.gradeKey}
              >
                {crit.description}
              </Criteria>
            </Collapse>
          ))}
        </Collapse.Group>
      </>
    );
  }
}

function Page() {
  return (
    <ZEITUIProvider>
      <CSSBaseline />
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
    </ZEITUIProvider>
  );
}

export default Page;
