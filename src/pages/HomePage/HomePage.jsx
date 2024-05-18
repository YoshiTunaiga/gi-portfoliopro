import PropTypes from "prop-types";
import { Button } from "@mui/material";
import aboutMeImg from "../../assets/profile3.png";
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

const HomePage = ({ id = "" }) => {
  const handleScrollToContact = () =>
    ScrollService.scrollHandler.scrollToContact();

  // const handleScrollToResume = () =>
  //   ScrollService.scrollHandler.scrollToResume();

  return (
    <StyledMainBoxParent id={id}>
      <StyledHomeOpacityContainer>
        <StyledHomeContentWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <StyledTitleHeader>FULL STACK SOFTWARE ENGINEER</StyledTitleHeader>
            <StyleNameHeader>Gi Diaz</StyleNameHeader>
          </div>
          {/* ====== HOME IMAGE ======  */}
          <div
            style={{
              padding: 0,
              maxHeight: "600px",
              zIndex: 1,
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
              borderRadius: "10%",
            }}>
            <img
              src={aboutMeImg}
              alt="aboutMe"
              width={350}
              style={{
                padding: 0,
                margin: 10,
                border: "1px solid white",
                borderRadius: "10%",
              }}
            />
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
        <div
          style={{
            minHeight: "28vh",
            backgroundColor: "#090429",
            padding: 20,
            zIndex: 1,
            // border: "1px solid white",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: 0,
              padding: 0,
              textAlign: "center",
            }}>
            <div>
              <p>Location</p>
              <p>Kissimmee, FL</p>
            </div>
            <div>
              <p>Experience</p>
              <p>2+ Years</p>
            </div>
            <div>
              <p>Language</p>
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
