import styled from "styled-components";
import myPicture from "../../assets/mypic.jpeg";

export const StyledClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #OOOOOO;
  background: linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 50%)),
    url(${myPicture});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover;
  background-attachment: fixed;
  /* object-fit: cover, */
`;
