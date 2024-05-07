import { volunteeringDetails } from "../resumeData";
import "../ResumePage.css";

const Volunteering = () => {
  return (
    <div
      key="programming-skills"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}>
      {volunteeringDetails.map((volunt, index) => (
        <div
          key={index}
          style={{
            textAlign: "left",
            fontFamily: "Arial Narrow",
            fontSize: "18px",
          }}>
          <p style={{ padding: 0, marginBottom: 0 }}>{volunt.company}</p>
          <p style={{ padding: 0, margin: "2px 0", color: "#868585" }}>
            {volunt.title} | <span>{volunt.year}</span>
          </p>
          <div style={{ color: "#868585" }}>
            <p style={{ padding: 0, marginTop: "6px" }}> {volunt.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Volunteering;
