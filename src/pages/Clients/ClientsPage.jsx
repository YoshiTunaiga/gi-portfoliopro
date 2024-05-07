import PropTypes from "prop-types";
import ClientsSection from "./ClientsSection";
import TestimonialsSection from "./TestimonialsSection";
import { StyledClientsContainer } from "./styles";

const ClientsPage = ({ id = "" }) => {
  return (
    <StyledClientsContainer id={id}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          margin: "100px",
        }}>
        <ClientsSection />
        <TestimonialsSection />
      </div>
    </StyledClientsContainer>
  );
};

ClientsPage.propTypes = {
  id: PropTypes.string,
};

export default ClientsPage;
