import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import ProfessionalExperience from "./components/ProfessionalExperience";
import SoftSkills from "./components/SoftSkills";
import EducationHistory from "./components/EducationHistory";
import LicensesAndCertifications from "./components/LicensesAndCertifications";
import {
  Work,
  School,
  EngineeringSharp,
  CardMembershipSharp,
  VolunteerActivismSharp,
} from "@mui/icons-material";
import "./ResumePage.css";
import Volunteering from "./components/Volunteering";

const ResumePage = ({ id = "" }) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;

    Animations.animations.fadeInScreen(id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  ResumePage.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
  };

  // /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Professional Experience", logoSrc: <Work fontSize="small" /> },
    { label: "Education History", logoSrc: <School fontSize="small" /> },
    { label: "Soft Skills", logoSrc: <EngineeringSharp fontSize="small" /> },
    {
      label: "Licenses & Certifications",
      logoSrc: <CardMembershipSharp fontSize="small" />,
    },
    {
      label: "Volunteering",
      logoSrc: <VolunteerActivismSharp fontSize="small" />,
    },
  ];

  const resumeDetails = [
    <ProfessionalExperience key={0} />,
    <EducationHistory key={1} />,
    <SoftSkills key={2} />,
    <LicensesAndCertifications key={3} />,
    <Volunteering key={4} />,
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
        <span className="bullet-label">{bullet.label}</span>
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
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        color: "#000000",
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
