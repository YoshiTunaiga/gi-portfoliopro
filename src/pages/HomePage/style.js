import styled from "styled-components";
import landingPageImg from "../../assets/emt.jpg";
import { Box } from "@mui/material";

export const StyledMainBoxParent = styled(Box)`
  min-height: 100vh;
  background-color: #100842;
  color: #ffffff;
  /* background: linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 50%)),
    url(${landingPageImg});
  background-repeat: no-repeat;
  background-position: cover;
  background-attachment: fixed;
  background-size: 100%; */ /* object-fit: cover; */
  /* border: 1px solid red; */

  @media only screen and (max-device-width: 480px) {
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
    /* min-height: 960px; */
  }
`;

export const StyledHomeOpacityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const StyledHomeContentWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-columns: 35% auto 25%;
  /* grid-template-rows: 1fr; */
  grid-gap: 35px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
  /* margin: 200px; */
  text-align: center;
  /* border: 1px solid red; */
  /* border: 1px solid white; */

  @media only screen and (min-device-width: 360px) and (max-device-width: 480px) {
    margin: 100px 20px 50px 20px;
    width: 25%;
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
    /* min-height: 960px; */
  }
`;

export const StyleNameHeader = styled.p`
  font-family: "Arial Black";
  font-size: 120px;
  padding: 0;
  margin: 0;
  line-height: 1;
  width: 60%;

  @media (max-width: 440px) {
    font-family: "Arial Black";
    font-size: 120px;
  }
`;

export const StyledTitleHeader = styled.p`
  font-family: "Times New Roman";
  font-weight: bold;
  font-size: 24px;
  padding: 0;
  margin: 0;

  @media (max-width: 440px) {
    font-size: 20px;
  }
`;

export const StyledHomeText = styled.p`
  font-family: "Times New Roman";
  font-size: 20px;
  padding: 0;
  margin: 0;

  @media (max-width: 440px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;

  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    /* margin-top: 10px; */
    gap: 10px;
  }
`;
