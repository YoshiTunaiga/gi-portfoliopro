import styled from "styled-components";
import formBgImg from "../../assets/Hike.png";
import { Grid, Box } from "@mui/material";

export const StyledContactPageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$windowWidth > 900 ? "100vh" : "110vh")};
  color: #000000;
  background: linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 50%)),
    url(${formBgImg});
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: cover;
  background-attachment: fixed;
  justify-content: center;
`;

export const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledContactSectionWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const StyledFooterDiv = styled.div`
  color: #ffffff;
  height: ${(props) =>
    props.$windowWidth > 900 ? "40px" : `calc(10% - ${props.$windowWidth})`};
  height: 40px;
  border-top: 1px solid #c7a03b;
  text-align: center;
  align-content: center;
  width: ${(props) => props.$windowWidth};
`;