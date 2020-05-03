import grade from "../data/grade";

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
      <h3>{title}</h3>
      <div>{children}</div>
      {grades[gradeKey].map((grade, index) => (
        <div key={index} style={{ marginLeft: "20px", marginTop: "10px" }}>
          <label>
            <input
              name={gradeKey + "Grade"}
              value={grade.name}
              onChange={handleInputChange}
              type="radio"
            />
            <strong>{grade.name}</strong> {grade.description}
          </label>
        </div>
      ))}
      {gradeValue !== "N/A" ? (
        <textarea
          onChange={handleInputChange}
          style={{ width: "100%" }}
          rows="5"
          name={gradeKey + "Note"}
          placeholder="Write your notes here. Try to stick to observable facts. If you have a really strong feeling and are convinced that you have to communicate it, make sure you separate the observable facts from your feelings."
        ></textarea>
      ) : (
        <></>
      )}
    </>
  );
}
