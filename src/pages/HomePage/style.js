import styled from "styled-components";
import landingPageImg from "../../assets/emt.jpg";

export const StyledMainBoxParent = styled.div`
  height: 100vh;
  width: 1440px;
  background: linear-gradient(rgba(0, 0, 0, 70%), rgba(0, 0, 0, 70%)),
    url(${landingPageImg});
  background-repeat: no-repeat;
  background-position: cover;
  background-attachment: fixed;
  background-size: 100%;
  object-fit: cover;
  /* border: 1px solid red; */

  /* @media (max-width: 390px) {
  }

  @media (max-width: 1024px) {
    min-height: 960px;
  } */
`;

export const StyledHomeOpacityContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 1440px;
  /* border: 1px solid red; */
  color: #ffffff;
  /* border: 1px solid yellow; */
`;
