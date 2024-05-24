import styled from "styled-components";
import { Grid, Box } from "@mui/material";

export const StyledContactPageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$windowWidth > 900 ? "100vh" : "110vh")};
  color: #000000;
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
