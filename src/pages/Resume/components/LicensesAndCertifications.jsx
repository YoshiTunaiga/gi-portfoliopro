import { licensesCertifications } from "../resumeData";
import "../ResumePage.css";

const LicensesAndCertifications = () => {
  return (
    <div
      key="programming-skills"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}>
      {licensesCertifications.map((educ, index) => (
        <div
          key={index}
          style={{
            textAlign: "left",
            fontFamily: "Arial Narrow",
            fontSize: "18px",
          }}>
          <p style={{ padding: 0, marginBottom: 0 }}>{educ.company}</p>
          <p style={{ padding: 0, margin: "2px 0", color: "#868585" }}>
            {educ.name} | <span>{educ.year}</span>
          </p>
          <div style={{ color: "#868585" }}>
            <p style={{ padding: 0, marginTop: "6px" }}> {educ.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LicensesAndCertifications;
