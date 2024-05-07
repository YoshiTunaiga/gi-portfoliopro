import { NavigateBeforeSharp, NavigateNextSharp } from "@mui/icons-material";
import { Box, Card, IconButton, Slide, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import DCLogo from "../../assets/DCLogo.png";
import FSALogo from "../../assets/FSALogo.jpeg";
import AstranaLogo from "../../assets/AstranaLogo.png";
import mftsLogo from "../../assets/mftsLogo.png";
import muchLogo from "../../assets/muchLogo.png";

// import PropTypes from "prop-types";

const ClientsSection = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const cardsPerPage = 3;
  const containerWidth = cardsPerPage * 280;
  const images = [
    { title: "FSALogo", img: FSALogo },
    { title: "muchLogo", img: muchLogo },
    { title: "AstranaLogo", img: AstranaLogo },
    { title: "mftsLogo", img: mftsLogo },
    { title: "DCLogo", img: DCLogo },
  ];
  const duplicateCards = useMemo(
    () =>
      images.map((item, idx) => (
        <Card
          key={idx}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: "200px",
            alignContent: "center",
            padding: 2,
          }}>
          <Stack>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </Stack>
        </Card>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleNextPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage - 1);
  };

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
        padding: 0,
        margin: 0,
        lineHeight: 1,
        // border: "1px solid yellow",
      }}>
      <p
        style={{
          color: "#C7A03B",
          fontFamily: "Times New Roman",
          fontSize: "34px",
          padding: 0,
          margin: 0,
        }}>
        CLIENTS
      </p>
      <p
        style={{
          color: "#FFFFFF",
          fontFamily: "Times New Roman",
          fontSize: "24px",
          padding: 0,
          margin: 0,
        }}>
        See some of the companies I have worked with
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
          marginTop: "40px",
        }}>
        <IconButton
          onClick={handlePrevPage}
          sx={{ margin: 5, color: "white" }}
          disabled={currentPage === 0}>
          {/* this is the button that will go to the previous page you can change these icons to whatever you wish*/}
          <NavigateBeforeSharp fontSize="large" />
        </IconButton>
        <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
          {/* this is the box that holds the cards and the slide animation,
        in this implementation the card is already constructed but in later versions you will see how the
        items you wish to use will be dynamically created with the map method*/}
          {cards.map((card, index) => (
            <Box
              key={`card-${index}`}
              sx={{
                width: "100%",
                height: "100%",
                display: currentPage === index ? "block" : "none",
              }}>
              {/* this is the slide animation that will be used to slide the cards in and out*/}
              <Slide direction={slideDirection} in={currentPage === index}>
                <Stack
                  spacing={2}
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                  sx={{ width: "100%", height: "100%" }}>
                  {/* this slices the cards array to only display the amount you have previously determined per page*/}
                  {cards.slice(
                    index * cardsPerPage,
                    index * cardsPerPage + cardsPerPage
                  )}
                </Stack>
              </Slide>
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={handleNextPage}
          sx={{
            margin: 5,
            color: "white",
          }}
          disabled={
            currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
          }>
          <NavigateNextSharp fontSize="large" />
        </IconButton>
      </Box>
    </div>
  );
};

ClientsSection.propTypes = {};

export default ClientsSection;
