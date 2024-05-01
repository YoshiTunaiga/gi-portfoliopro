import PropTypes from "prop-types";

const ClientsPage = ({ id = "" }) => {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        color: "#FFFFFF",
        // border: "1px solid red",
        backgroundColor: "#302E2E",
        justifyContent: "center",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          textAlign: "center",
          border: "1px solid yellow",
        }}>
        Clients
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          textAlign: "center",
          border: "1px solid olive",
        }}>
        Testimonials
      </div>
    </div>
  );
};

ClientsPage.propTypes = {
  id: PropTypes.string,
};

export default ClientsPage;
