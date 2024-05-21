import { educationalHistoryDetails } from "../resumeData";
import "../ResumePage.css";

const EducationHistory = () => {
  return (
    <div
      key="programming-skills"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}>
      {educationalHistoryDetails.map((educ, index) => (
        <div
          key={index}
          style={{
            textAlign: "left",
            fontSize: "18px",
          }}>
          <p style={{ padding: 0, marginBottom: 0 }}>{educ.company}</p>
          <p style={{ padding: 0, margin: "2px 0", color: "#868585" }}>
            {educ.course} | <span>{educ.courseDate}</span>
          </p>
          <div style={{ color: "#868585" }}>
            <p style={{ padding: 0, marginTop: "6px" }}> {educ.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationHistory;
