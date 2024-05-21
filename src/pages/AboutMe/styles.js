import styled from "styled-components";
import "../../styles/index.css";
import { Container } from "@mui/material";

export const StyledAboutMeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;
`;

export const StyledImageContainer = styled.div`
  padding: 0;
  margin: 0;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const StyledHeaderContainer = styled.div``;

export const StyledPrimaryHeader = styled.p`
  padding: 0;
  margin: 0;
  color: #c7a03b;
  font-family: "Times New Roman";
  font-size: var(--size-8xl);
`;

export const StyledSecondaryHeader = styled.p`
  padding: 0;
  margin: 0;
  font-size: var(--size-4xl);
`;
