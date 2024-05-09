import { Box, Card, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import DCLogo from "../../assets/DCLogo.png";
import FSALogo from "../../assets/FSALogo.jpeg";
import AstranaLogo from "../../assets/AstranaLogo.png";
import mftsLogo from "../../assets/mftsLogo.png";
import muchLogo from "../../assets/muchLogo.png";
// import { red } from "@mui/material/colors";

// import PropTypes from "prop-types";

const ClientsSection = () => {
  const [cards, setCards] = useState([]);
  const cardsPerPage = 4;
  const containerWidth = cardsPerPage * 220;
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
            borderColor: "rgba(255,255,255,0.4)",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            height: "200px",
            width: "250px",
            alignContent: "center",
            padding: 2,
            boxShadow: `2px 2px 15px 2px rgba(0,0,0,0.25), -2px -2px 15px 2px rgba(0,0,0,0.22)`,
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

  // const handleNextPage = () => {
  //   setSlideDirection("right");
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

  // const handlePrevPage = () => {
  //   setSlideDirection("left");
  //   setCurrentPage((prevPage) => prevPage - 1);
  // };

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
          width: "100%",
          marginTop: "40px",
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

ClientsSection.propTypes = {};

export default ClientsSection;
