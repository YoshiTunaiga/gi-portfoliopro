import { professionalExperienceDetails } from "../resumeData";
import "../ResumePage.css";

const ProfessionalExperience = () => {
  return (
    <div
      key="programming-skills"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}>
      {professionalExperienceDetails.map((job, index) => (
        <div
          key={index}
          style={{
            textAlign: "left",
            fontFamily: "Arial Narrow",
            fontSize: "18px",
          }}>
          <p style={{ padding: 0, marginBottom: 0 }}>{job.company}</p>
          <p style={{ padding: 0, margin: "2px 0", color: "#868585" }}>
            {job.position}
          </p>
          <div style={{ color: "#868585" }}>
            <p style={{ padding: 0, marginTop: "6px" }}> {job.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;
