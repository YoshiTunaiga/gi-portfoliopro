import PropTypes from "prop-types";
import { Button } from "@mui/material";
import aboutMeImg from "../../assets/profile.png";
import ScrollService from "../../utilities/ScrollService";
import {
  StyledHomeOpacityContainer,
  StyledMainBoxParent,
  StyledHomeContentWrapper,
  StyleNameHeader,
  StyledTitleHeader,
  StyledHomeText,
  StyledButtonsContainer,
} from "./style";
import "../../styles/index.css";
import "./../../styles/modern-style.css";
import "./../../styles/utils.css";

const HomePage = ({ id = "" }) => {
  const handleScrollToContact = () =>
    ScrollService.scrollHandler.scrollToContact();

  // const handleScrollToResume = () =>
  //   ScrollService.scrollHandler.scrollToResume();

  return (
    <StyledMainBoxParent id={id}>
      <StyledHomeOpacityContainer>
        <StyledHomeContentWrapper>
          {/* ====== HOME IMAGE ======  */}
          <div
            style={{
              padding: 0,
              maxHeight: "600px",
              zIndex: 1,
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
              borderRadius: "40%",
            }}>
            <img
              src={aboutMeImg}
              alt="aboutMe"
              width={160}
              style={{
                padding: 0,
                margin: 0,
                border: "1px solid white",
                borderRadius: "40%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <StyledTitleHeader>{`Hola, I'm Gi Diaz`}</StyledTitleHeader>
            <StyleNameHeader>FULL STACK SOFTWARE ENGINEER</StyleNameHeader>
          </div>

          <div
            style={{
              // borderLeft: "1px solid white",
              padding: 15,
              textAlign: "center",
            }}>
            <StyledHomeText>
              Full Stack Software Engineer Innovating Healthcare Solutions for
              Better Patient Outcomes
            </StyledHomeText>
            <StyledHomeText>
              Prevention Navigation, Scalable Web Applications, Agile
              Development, JavaScript
            </StyledHomeText>
            <StyledButtonsContainer>
              <Button variant="outlined" onClick={handleScrollToContact}>
                CONTACT ME
              </Button>
              {/* <Button variant="outlined" onClick={handleScrollToResume}>
              RESUME
            </Button> */}
            </StyledButtonsContainer>
          </div>
        </StyledHomeContentWrapper>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: 0,
              padding: 0,
              textAlign: "center",
            }}>
            <div>
              <p className="greyHeading">Location</p>
              <p>Kissimmee, FL</p>
            </div>
            <div>
              <p className="greyHeading">Tech Experience</p>
              <p>2+ Years</p>
            </div>
            <div>
              <p className="greyHeading">Customer Services</p>
              <p>12+ Years</p>
            </div>
            <div>
              <p className="greyHeading">Language</p>
              <p>Billingual</p>
            </div>
          </div>
        </div>
      </StyledHomeOpacityContainer>
    </StyledMainBoxParent>
  );
};

HomePage.propTypes = {
  id: PropTypes.string,
};

export default HomePage;
