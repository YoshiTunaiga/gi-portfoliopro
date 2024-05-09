import PropTypes from "prop-types";
import aboutMeImg from "../../assets/profile3.png";
import {
  StyledAboutMeContainer,
  StyledImageContainer,
  StyledPrimaryHeader,
  StyledSecondaryHeader,
  StyledTextContainer,
  StyledHeaderContainer,
} from "./styles";

const AboutMePage = ({ id = "" }) => {
  return (
    <StyledAboutMeContainer id={id}>
      <StyledTextContainer>
        <StyledHeaderContainer>
          <StyledPrimaryHeader>ABOUT ME</StyledPrimaryHeader>
          <StyledSecondaryHeader>Get To Know Me</StyledSecondaryHeader>
        </StyledHeaderContainer>
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
      </StyledTextContainer>
      <StyledImageContainer>
        <img
          src={aboutMeImg}
          alt="aboutMe"
          width={454}
          style={{ paddingTop: 7 }}
        />
      </StyledImageContainer>
    </StyledAboutMeContainer>
  );
};

AboutMePage.propTypes = {
  id: PropTypes.string,
};

export default AboutMePage;
