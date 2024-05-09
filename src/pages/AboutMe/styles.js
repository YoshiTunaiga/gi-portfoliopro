import styled from "styled-components";

export const StyledAboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  color: #000000;
  background-color: #ffffff;
  justify-content: space-evenly;
  padding: 100px 0px 0px 50px;

  @media only screen and (max-device-width: 480px) {
    flex-direction: column;
    padding: 100px 50px 50px 30px;
    max-width: 440px;
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
    flex-direction: column;
    min-height: 100vh;
    padding: 10px 100px 10px 100px;
    max-width: 1024px;
    border: 1px solid red;
  }
`;

export const StyledImageContainer = styled.div`
  padding: 0;
  margin: 0 0 0 80px;

  @media (max-width: 440px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media only screen and (max-device-width: 480px) {
    inline-size: 300px;
    overflow-wrap: break-word;
  }
`;

export const StyledHeaderContainer = styled.div``;

export const StyledPrimaryHeader = styled.p`
  padding: 0;
  margin: 0;
  color: #c7a03b;
  font-family: "Times New Roman";
  font-size: 24px;
  line-height: 1;
`;

export const StyledSecondaryHeader = styled.p`
  padding: 0;
  margin: 0;
  /* color: #c7a03b; */
  font-family: "Arial Narrow";
  font-size: 44px;
  line-height: 1;
`;
