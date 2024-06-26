import PropTypes from "prop-types";
import { Button, Divider } from "@mui/material";
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

  const handleScrollToResume = () =>
    ScrollService.scrollHandler.scrollToResume();

  return (
    <StyledMainBoxParent id={id}>
      <StyledHomeOpacityContainer>
        <StyledHomeContentWrapper>
          <StyleNameHeader>Gi</StyleNameHeader>
          <StyledTitleHeader>FULL STACK SOFTWARE ENGINEER</StyledTitleHeader>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <StyledHomeText>
              Full Stack Software Engineer | Innovating Healthcare Solutions for
              Better Patient Outcomes
            </StyledHomeText>
            <StyledHomeText>
              Prevention Navigation, Scalable Web Applications, Agile
              Development, JavaScript
            </StyledHomeText>
          </div>
          <StyledButtonsContainer>
            <Button variant="outlined" onClick={handleScrollToContact}>
              CONTACT ME
            </Button>
            <Button variant="outlined" onClick={handleScrollToResume}>
              RESUME
            </Button>
          </StyledButtonsContainer>
        </StyledHomeContentWrapper>
      </StyledHomeOpacityContainer>
    </StyledMainBoxParent>
  );
};

HomePage.propTypes = {
  id: PropTypes.string,
};

export default HomePage;
