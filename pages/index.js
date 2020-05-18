import Criteria from "../components/criteria";
import Results from "../components/results";
import rubric from "../data/rubric";
import {
  CSSBaseline,
  ZEITUIProvider,
  Collapse,
  Text,
  Link,
} from "@zeit-ui/react";
import { Github } from "@zeit-ui/react-icons";

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

        <Text h2>{rubricBuildSoftware.title}</Text>
        <Text>{rubricBuildSoftware.description}</Text>
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

        <Text h2>{rubricLearnAndTeach.title}</Text>
        <Text>{rubricLearnAndTeach.description}</Text>
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
    <>
      <ZEITUIProvider>
        <CSSBaseline />
        <div>
          <Text h1>Engineering Interview Grading Rubric</Text>
          <p>
            Based on{" "}
            <a href="https://medium.engineering/engineering-interviews-grading-rubric-8b409bec021f">
              Medium's engineering interview grading rubric
            </a>
          </p>
          <p>
            <a href="https://github.com/thiagooak/engineering-interview-grading-rubric">
              <Github />
            </a>
          </p>
          <Form />
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
