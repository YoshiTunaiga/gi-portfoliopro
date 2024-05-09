import styled from "styled-components";

export const StyledResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  min-height: fit-content;
  align-items: center;
  gap: 40;
  background-color: #ffffff;
  text-align: center;
  color: #000000;
  padding: 0;
  margin: 0;
  line-height: 1.5;
`;

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
  font-family: "Arial Narrow";
  font-size: 44px;
  line-height: 1;
`;

export const StyledResumeCard = styled.div`
  display: flex;
  min-height: 480px;
  margin-top: 10px;
`;

export const StyledResumeBullets = styled.div`
  box-shadow: 15px 0 9px -15px rgb(32, 32, 88);
  height: 100%;
  width: 320px;
`;

export const StyledBulletContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const StyledBulletIcons = styled.div`
  width: 38px;
  height: 100%;
  z-index: 1;
  background-color: #c7a03b;
  position: absolute;
`;

export const StyledBulletsDiv = styled.div`
  width: 90%;
  position: relative;
  z-index: 2;
`;

export const StyledResumeBulletDetails = styled.div`
  flex-grow: 1;
  width: 600px;
  overflow: hidden;
  padding: 0 0 0 30px;
`;
