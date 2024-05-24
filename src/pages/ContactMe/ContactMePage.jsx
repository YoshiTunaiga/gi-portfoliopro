import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, Link, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  StyledContactPageContainer,
  StyledContactSectionWrapper,
  FormGrid,
} from "./styles";
import "../../styles/index.css";

const ContactMePage = ({ id = "" }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [customerData, setCustomerData] = useState({
    customerPhone: "",
    customerName: "",
    customerEmail: "",
    customerMessage: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCustomerData = (event) => {
    const { name, value } = event.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleClearCustomerData = () => {
    setCustomerData({
      customerPhone: "",
      customerName: "",
      customerEmail: "",
      customerMessage: "",
    });
  };

  return (
    <StyledContactPageContainer
      id={id}
      $windowWidth={windowWidth}
      style={{
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingTop: "5%",
      }}>
      <StyledContactSectionWrapper
        style={{
          flexDirection: windowWidth > 900 ? "row" : "column",
          width: windowWidth,
          padding: windowWidth > 900 ? "20px" : "30px",
          justifyContent: "space-evenly",
          gap: windowWidth > 900 ? "20px" : "30px",
        }}>
        {/* ====== CONTACT MESSAGE ====== */}
        <div
          style={{
            minWidth: "420px",
            maxWidth: "450px",
            alignContent: "center",
          }}>
          <p
            style={{
              color: "#C7A03B",
              fontSize: "34px",
              padding: 0,
              margin: 0,
              lineHeight: 1,
            }}>
            CONTACT
          </p>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "54px",
              padding: 0,
              margin: 0,
              lineHeight: 1,
            }}>
            {`Let's Get In Touch`}
          </p>
          <div
            style={{
              color: "#FFFFFF",
            }}>
            <p style={{ textAlign: "center", textWrap: "wrap" }}>
              Send me a message by filling out the form, I will reach back as
              soon as possible!
            </p>
            <p>We can also connect through:</p>
          </div>
          <Box
            sx={{
              color: "primary.light",
              display: "flex",
              justifyContent: "center",
              gap: 3,
              padding: 2,
            }}>
            <Link
              href="https://www.linkedin.com/in/gisseldiazf/"
              underline="none"
              target="_blank"
              color="var(--clr-rose)">
              <LinkedIn fontSize="large" />
            </Link>

            <Link
              href="https://github.com/YoshiTunaiga"
              underline="none"
              target="_blank"
              color="var(--clr-rose)">
              <GitHub fontSize="large" />
            </Link>
          </Box>
        </div>
        {/* ====== CONTACT FORM ====== */}
        <div
          style={{
            background: "rgba(0,0,0, 0.1)",
            boxShadow: "-4px 4px 8px 2px #000000",
            borderRadius: "15px",
            width: "430px",
            height: "430px",
            padding: "20px",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              textAlign: "center",
              borderRadius: 10,
              border: "1px solid yellow",
              height: "390px",
              padding: "20px",
              gap: 8,
            }}>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "54px",
                padding: 0,
                margin: 0,
              }}>
              Contact Form
            </p>
            {/* ============= FORM ============= */}
            <div style={{ color: "#FFFFFF" }}>
              <form
                id="myForm"
                target="_blank"
                action={`https://formsubmit.co/${
                  import.meta.env.VITE_FORM_API_KEY
                }`}
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Grid item>
                  <TextField
                    fullWidth
                    id="customer-name"
                    name="customerName"
                    type="name"
                    placeholder="Enter your name"
                    autoComplete="customer name"
                    required
                    value={customerData.customerName}
                    onChange={handleCustomerData}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="customer-email"
                    name="customerEmail"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="customer email"
                    value={customerData.customerEmail}
                    onChange={handleCustomerData}
                  />
                </Grid>
                <FormGrid item>
                  <TextField
                    fullWidth
                    id="customer-message"
                    name="customerMessage"
                    placeholder="Type your message here..."
                    multiline
                    rows={3}
                    value={customerData.customerMessage}
                    onChange={handleCustomerData}
                  />
                </FormGrid>
              </form>
            </div>
            {/* ============= BUTTONS ============= */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}>
              <Button
                type="submit"
                variant="outlined"
                sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                <p>SEND</p>
                <SendIcon />
              </Button>
              <Button variant="outlined" onClick={handleClearCustomerData}>
                CLEAR
              </Button>
            </div>
          </div>
        </div>
      </StyledContactSectionWrapper>
      <div
        style={{
          color: "#FFFFFF",
          height: "40px",
          borderTop: "1px solid #C7A03B",
          textAlign: "center",
          alignContent: "center",
          width: windowWidth,
        }}>
        Copyright © 2024 Gi Diaz Solutions. All rights reserved
      </div>
    </StyledContactPageContainer>
  );
};

ContactMePage.propTypes = {
  id: PropTypes.string,
};

export default ContactMePage;
