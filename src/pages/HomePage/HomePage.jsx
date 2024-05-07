import PropTypes from "prop-types";
import { Button, Divider } from "@mui/material";
import {
  StyledHomeOpacityContainer,
  StyledMainBoxParent,
  StyledHomeContentWrapper,
  StyleNameHeader,
  StyledTitleHeader,
  StyledHomeText,
  StyledButtonsContainer,
} from "./style";
import ScrollService from "../../utilities/ScrollService";

const HomePage = ({ id = "" }) => {
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
            <Button
              variant="outlined"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              CONTACT ME
            </Button>
            <Button
              variant="outlined"
              onClick={() => ScrollService.scrollHandler.scrollToResume()}>
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
