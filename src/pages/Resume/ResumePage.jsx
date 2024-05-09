import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Work,
  School,
  EngineeringSharp,
  CardMembershipSharp,
  VolunteerActivismSharp,
} from "@mui/icons-material";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import ProfessionalExperience from "./components/ProfessionalExperience";
import SoftSkills from "./components/SoftSkills";
import EducationHistory from "./components/EducationHistory";
import LicensesAndCertifications from "./components/LicensesAndCertifications";
import Volunteering from "./components/Volunteering";
import {
  StyledResumeContainer,
  StyledPrimaryHeader,
  StyledSecondaryHeader,
  StyledResumeCard,
  StyledResumeBullets,
  StyledBulletContainer,
  StyledBulletIcons,
  StyledBulletsDiv,
  StyledResumeBulletDetails,
} from "./styles";
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
    <StyledResumeContainer id={id}>
      <div>
        <StyledPrimaryHeader>RESUME</StyledPrimaryHeader>
        <StyledSecondaryHeader>Professional Highlights</StyledSecondaryHeader>
      </div>
      <StyledResumeCard>
        <StyledResumeBullets>
          <StyledBulletContainer>
            <StyledBulletIcons></StyledBulletIcons>
            <StyledBulletsDiv>{getBullets()}</StyledBulletsDiv>
          </StyledBulletContainer>
        </StyledResumeBullets>
        <StyledResumeBulletDetails>
          {getResumeScreens()}
        </StyledResumeBulletDetails>
      </StyledResumeCard>
    </StyledResumeContainer>
  );
};

ResumePage.propTypes = {
  id: PropTypes.string,
};

export default ResumePage;
