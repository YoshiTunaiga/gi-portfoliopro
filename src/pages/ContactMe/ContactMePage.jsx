// import React from 'react'
import PropTypes from "prop-types";
import formBgImg from "../../assets/Hike.png";
import { Button, Grid, OutlinedInput, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ContactMePage = ({ id = "" }) => {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        color: "#FFFFFF",
        backgroundColor: "#302E2E",
        justifyContent: "center",
      }}>
      <div
        style={{
          flexGrow: 8,
          justifyContent: "center",
          alignContent: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}>
          <div>
            <p
              style={{
                color: "#C7A03B",
                fontFamily: "Times New Roman",
                fontSize: "34px",
                padding: 0,
                margin: 0,
                lineHeight: 1,
              }}>
              CONTACT
            </p>
            <p
              style={{
                fontFamily: "Arial Narrow",
                fontSize: "54px",
                padding: 0,
                margin: 0,
                lineHeight: 1,
              }}>
              {`Let's Get In Touch`}
            </p>
          </div>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%)), url(${formBgImg})`,
              backgroundSize: "cover",
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
                border: "1px solid yellow",
                padding: "10px",
                gap: 8,
              }}>
              <p
                style={{
                  fontFamily: "Times New Roman",
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
                    <OutlinedInput
                      fullWidth
                      id="customer-name"
                      name="customerName"
                      type="name"
                      placeholder="Enter your name"
                      autoComplete="customer name"
                      required
                      // onChange={handleCustomerData}
                    />
                  </Grid>
                  <Grid item>
                    <OutlinedInput
                      fullWidth
                      id="customer-email"
                      name="customerEmail"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="customer email"
                      // onChange={handleCustomerData}
                    />
                  </Grid>
                  <FormGrid item>
                    <p>MESSAGE:</p>
                    <TextField
                      fullWidth
                      id="customer-message"
                      name="customerMessage"
                      placeholder="Type your message here..."
                      multiline
                      rows={3}
                      // onChange={handleCustomerData}
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
                  variant="outlined"
                  sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <p>SEND</p>
                  <SendIcon />
                </Button>
                <Button variant="outlined">CLEAR</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "40px",
          borderTop: "1px solid #C7A03B",
          textAlign: "center",
          alignContent: "center",
        }}>
        @ CopyRight Gi Diaz Solutions
      </div>
    </div>
  );
};

ContactMePage.propTypes = {
  id: PropTypes.string,
};

export default ContactMePage;
