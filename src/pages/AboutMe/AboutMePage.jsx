import PropTypes from "prop-types";
import aboutMeImg from "../../assets/profile3.png";

const AboutMePage = ({ id = "" }) => {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        justifyContent: "space-evenly",
        gap: 100,
        padding: "100px 20px 10px 160px",
        // border: "1px solid red",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}>
        <div>
          <p
            style={{
              color: "#C7A03B",
              fontFamily: "Times New Roman",
              fontSize: "34px",
              padding: 0,
              margin: 0,
              lineHeight: 1,
            }}>
            ABOUT ME
          </p>
          <p
            style={{
              fontFamily: "Arial Narrow",
              fontSize: "54px",
              padding: 0,
              margin: 0,
              lineHeight: 1,
            }}>
            Get To Know Me
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Times New Roman",
            fontSize: "20px",
            textAlign: "left",
          }}>
          <p>
            {`Throughout my career, I've been dedicated to serving others, first as
          an EMT and Community Health Educator, accumulating 13 years of
          invaluable customer service experience. Alongside this, my passion for
          technology has always been evident. Transitioning into a Software
          Engineer role, I've honed my coding skills through the Grace Hopper
          Program.`}
          </p>
          <p>
            {`As a Software Engineer, I bring a proven record of delivering results,
          backed by 15 years of customer service expertise and a profound
          commitment to healthcare. With over 2 years of experience integrating
          innovative methodologies and staying updated on industry advancements,
          I've contributed to pioneering software solutions that tangibly
          improve patient outcomes. My unwavering dedication extends beyond
          work, evident in my participation in Spartan obstacle races.`}
          </p>
          <p>
            {`I'm enthusiastic about leveraging technology to enhance lives and
          communities further while continuously expanding my knowledge in this
          dynamic field.`}
          </p>
        </div>
      </div>
      <div>
        <img src={aboutMeImg} alt="aboutme" width={450} />
      </div>
    </div>
  );
};

AboutMePage.propTypes = {
  id: PropTypes.string,
};

export default AboutMePage;
