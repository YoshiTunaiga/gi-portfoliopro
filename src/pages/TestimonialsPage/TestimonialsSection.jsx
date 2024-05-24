import PropTypes from "prop-types";
import { Box, Card, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import "./TestimonialsPage.css";

const TestimonialsSection = ({ testimonialsArray }) => {
  const [cards, setCards] = useState([]);
  const cardsPerPage = 3;
  const containerWidth = cardsPerPage * 350;

  const duplicateCards = useMemo(
    () =>
      testimonialsArray.map((item, idx) => (
        <Card
          key={idx}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "180px",
            width: "320px",
            alignContent: "center",
            padding: 2,
            boxShadow: `2px 2px 15px 2px rgba(0,0,0,0.25), -2px -2px 15px 2px rgba(0,0,0,0.22)`,
          }}>
          <div className="testimonial-container" style={{ height: "150px" }}>
            <p
              className="text-3"
              style={{
                color: "#000000",
                fontSize: "14px",
                fontStyle: "italic",
                lineHeight: "18.5px",
              }}>
              {`${item.content}`}
            </p>
          </div>
        </Card>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {
    setCards(duplicateCards);
  }, [duplicateCards]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        textAlign: "center",
        color: "#C7A03B",
        fontSize: "34px",
        padding: 0,
        margin: 0,
        lineHeight: 1,
        // border: "1px solid olive",
      }}>
      <p
        style={{
          color: "#C7A03B",
          fontSize: "34px",
          padding: 0,
          margin: 0,
        }}>
        TESTIMONIALS
      </p>
      <p
        style={{
          color: "#100842",
          fontSize: "24px",
          padding: 0,
          margin: 0,
        }}>
        Feedback from former colleagues and clients. See more{" "}
        <a href="https://www.linkedin.com/in/gisseldiazf/#:~:text=Recommendations,Recommendations">
          here
        </a>
        .{" "}
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "200px",
          width: "100%",
          marginTop: "20px",
        }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows: "1fr",
            gridGap: "10px",
            margin: "10px",
            justifyContent: "space-around",
            width: `${containerWidth}px`,
            height: "100%",
          }}>
          {cards.map((card, index) => (
            <Box
              key={`card-${index}`}
              sx={{
                width: "100%",
                height: "100%",
              }}>
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{
                  width: "100%",
                  height: "100%",
                }}>
                {card}
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

TestimonialsSection.propTypes = {
  testimonialsArray: PropTypes.array,
};

export default TestimonialsSection;
