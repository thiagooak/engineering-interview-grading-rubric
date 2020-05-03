import grade from "../data/grade";
import { Radio, Textarea, Tooltip, Row, Col } from "@zeit-ui/react";
import { HelpCircle } from "@zeit-ui/react-icons";

export default function Criteria({
  handleInputChange,
  children,
  title,
  gradeKey,
  gradeValue,
}) {
  const grades = grade();
  return (
    <>
      <div>{children}</div>
      <Row justify="center">
        <Radio.Group
          value={gradeValue}
          onChange={(val) => handleInputChange(gradeKey + "Grade", val)}
          useRow
        >
          {grades[gradeKey].map((grade, index) => (
            <div key={index} style={{ marginLeft: "20px", marginTop: "10px" }}>
              <label>
                <Radio value={grade.name}>
                  <Row>
                    <Col>{grade.name}</Col>
                    <Col>
                      <Tooltip
                        placement={index < 1 ? "topStart" : "top"}
                        text={grade.description}
                      >
                        <HelpCircle size={16} />
                      </Tooltip>
                    </Col>
                  </Row>
                </Radio>
              </label>
            </div>
          ))}
        </Radio.Group>
      </Row>

      {gradeValue !== "N/A" ? (
        <Textarea
          width="100%"
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          name={gradeKey + "Note"}
          placeholder="Write your notes here. Try to stick to observable facts. If you have a really strong feeling and are convinced that you have to communicate it, make sure you separate the observable facts from your feelings."
        />
      ) : (
        <></>
      )}
    </>
  );
}
