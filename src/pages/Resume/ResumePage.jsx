import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import { Work } from "@mui/icons-material";
import "./ResumePage.css";

const ResumePage = ({ id = "" }) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;

    Animations.animations.fadeInScreen(id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = ({
    heading,
    subHeading,
    description,
    fromDate,
    toDate,
  }) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{heading ? heading : ""}</span>
          {fromDate && toDate ? (
            <div className="heading-date">{fromDate + "-" + toDate}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{subHeading ? subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{description ? description : ""}</span>
        </div>
      </div>
    );
  };

  ResumePage.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
  };

  // /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Professional Experience", logoSrc: <Work /> },
    { label: "Education History", logoSrc: <Work /> },
    { label: "Soft Skills", logoSrc: <Work /> },
    { label: "Licenses & Certifications", logoSrc: <Work /> },
    { label: "Volunteering", logoSrc: <Work /> },
  ];

  const professionalExperienceDetails = [
    {
      company: "Astrana Health (former ApolloMed)",
      position: "Software Engineer II",
      content: `An innovative, flexible organization outside of the standardized
      healthcare system that focuses on bringing stagnant healthcare ambitions
      to life. They address systemic healthcare issues in collaboration with
      providers to ensure the best possible care for all patients at a lower
      cost.`,
    },
    {
      company: "Budget Better (now Much)",
      position: "Junior Software Developer",
      content: `Automating the tedious parts of personal
      finance so you can focus on the money decisions that really matter.`,
    },
    {
      company: "Fullstack Academy",
      position: "Software Engineer Instructional Mentor PT",
      content: `Immersive, live online bootcamp offerings in Coding, Cybersecurity,
      Data Analytics, AI & Machine Learning, and more!`,
    },
  ];

  const softSkillsDetails = [
    "Problem-solving",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Attention to detail",
    "Passionate",
    "Proactive",
    "Multitasker",
  ];

  const resumeDetails = [
    //   /* PROGRAMMING SKILLS */
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
    </div>,

    //   /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Apart from being a tech enthusiast , I also love to test my physical resistance by participating in obstacle races like Spartan, RuggedManiac, TD Five Boro Bike Tour and others."
      />
      <ResumeHeading
        heading="Art"
        description="Depending on the Season, I go deep into Art, such as painting, figure drawing, cross stitching, building puzzles, and others. These are my hobbies. What about yours?"
      />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills">
      {softSkillsDetails.map((skill, index) => (
        <div className="skill-parent1" key={index}>
          <div className="heading-bullet"></div>
          <p>{skill}</p>
        </div>
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}>
        {bullet.logoSrc}
        {/* <i className={`${bullet.logoSrc}`} aria-hidden="true"></i> */}
        <span className="bullet-label"> - {bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        // style={carousalOffsetStyle.style}
        className="resume-details-carousal">
        {resumeDetails[selectedBulletIndex]}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        minHeight: "fit-content",
        alignItems: "center",
        gap: 40,
        backgroundColor: "#000000",
        textAlign: "center",
        color: "#FFFFFF",
        padding: 0,
        margin: 0,
        lineHeight: 1.5,
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
          RESUME
        </p>
        <p
          style={{
            fontFamily: "Arial Narrow",
            fontSize: "54px",
            padding: 0,
            margin: 0,
            lineHeight: 1,
          }}>
          Professional Highlights
        </p>
      </div>
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
          </div>
        </div>

        <div className="resume-bullet-details">{getResumeScreens()}</div>
      </div>
    </div>
  );
};

ResumePage.propTypes = {
  id: PropTypes.string,
};

export default ResumePage;
