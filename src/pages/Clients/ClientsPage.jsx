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
        justifyContent: "space-evenly",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          textAlign: "center",
          color: "#C7A03B",
          fontFamily: "Times New Roman",
          fontSize: "34px",
          padding: 0,
          margin: 0,
          lineHeight: 1,
          border: "1px solid yellow",
        }}>
        CLIENTS
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          textAlign: "center",
          color: "#C7A03B",
          fontFamily: "Times New Roman",
          fontSize: "34px",
          padding: 0,
          margin: 0,
          lineHeight: 1,
          border: "1px solid olive",
        }}>
        TESTIMONIALS
      </div>
    </div>
  );
};

ClientsPage.propTypes = {
  id: PropTypes.string,
};

export default ClientsPage;
