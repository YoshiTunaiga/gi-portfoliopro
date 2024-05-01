import PropTypes from "prop-types";
import { Button, Divider } from "@mui/material";
import { StyledHomeOpacityContainer, StyledMainBoxParent } from "./style";

const HomePage = ({ id = "" }) => {
  return (
    <StyledMainBoxParent id={id}>
      <StyledHomeOpacityContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 8,
            margin: "200px",
            textAlign: "center",
          }}>
          <p
            style={{
              fontFamily: "Arial Black",
              fontSize: "120px",
              padding: 0,
              margin: 0,
              lineHeight: 1,
            }}>
            Gi
          </p>
          <p
            style={{
              fontFamily: "Times New Roman",
              fontWeight: "bold",
              fontSize: "24px",
              padding: 0,
              margin: 0,
            }}>
            FULL STACK SOFTWARE ENGINEER
          </p>
          <Divider />
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "Times New Roman",
                fontSize: "24px",
                padding: 0,
                margin: 0,
              }}>
              Full Stack Software Engineer | Innovating Healthcare Solutions for
              Better Patient Outcomes
            </p>
            <p
              style={{
                fontFamily: "Times New Roman",
                fontSize: "24px",
                padding: 0,
                margin: 0,
              }}>
              Prevention Navigation, Scalable Web Applications, Agile
              Development, JavaScript
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}>
            <Button variant="outlined">CONTACT ME</Button>
            <Button variant="outlined">RESUME</Button>
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
