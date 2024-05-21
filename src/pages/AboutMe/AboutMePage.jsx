import PropTypes from "prop-types";
import aboutMeImg from "../../assets/emt.jpg";
import {
  StyledAboutMeContainer,
  // StyledImageContainer,
  StyledPrimaryHeader,
  StyledSecondaryHeader,
  StyledTextContainer,
  StyledHeaderContainer,
} from "./styles";
import "../../styles/index.css";
import "./../../styles/modern-style.css";
import "./../../styles/utils.css";
import "./AboutMe.css";
import { Avatar, Divider, List, ListItemAvatar } from "@mui/material";
import { techAndTools } from "./aboutMeData";

const AboutMePage = ({ id = "" }) => {
  return (
    <StyledAboutMeContainer
      id={id}
      className=" container section"
      sx={{ py: { xs: 4, sm: 12 } }}>
      <StyledTextContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledHeaderContainer>
            <StyledPrimaryHeader>ABOUT ME</StyledPrimaryHeader>
          </StyledHeaderContainer>
          <div
            style={{
              maxWidth: "70ch",
              fontSize: "var(--size-base)",
              color: "var(--clr-slate600)",
              padding: "8px 0",
            }}>
            <p className="about_description">
              {`Throughout my career, I've been dedicated to serving others, first as
          an EMT and Community Health Educator, accumulating 13 years of
          invaluable customer service experience. Alongside this, my passion for
          technology has always been evident. Transitioning into a Software
          Engineer role, I've honed my coding skills through the Grace Hopper
          Program.`}
            </p>
            <p className="about_description">
              {`As a Software Engineer, I bring a proven record of delivering results,
          backed by 15 years of customer service expertise and a profound
          commitment to healthcare. With over 2 years of experience integrating
          innovative methodologies and staying updated on industry advancements,
          I've contributed to pioneering software solutions that tangibly
          improve patient outcomes. My unwavering dedication extends beyond
          work, evident in my participation in Spartan obstacle races.`}
            </p>
            <p className="about_description">
              {`I'm enthusiastic about leveraging technology to enhance lives and
          communities further while continuously expanding my knowledge in this
          dynamic field.`}
            </p>
          </div>
        </div>
        {/* ====== ABOUT IMAGE ======= */}
        <div className="about__img-wrapper">
          <img className="about__img" src={aboutMeImg} alt="aboutMe" />
        </div>
      </StyledTextContainer>
      <Divider />
      <div>
        <StyledSecondaryHeader>Tech & Tools</StyledSecondaryHeader>
        <List
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            py: { xs: 1, sm: 3 },
          }}>
          {techAndTools.map((tool) => (
            <ListItemAvatar key={tool.alt}>
              <Avatar alt={tool.alt} src={tool.src} />
            </ListItemAvatar>
          ))}
        </List>
      </div>
    </StyledAboutMeContainer>
  );
};

AboutMePage.propTypes = {
  id: PropTypes.string,
};

export default AboutMePage;
