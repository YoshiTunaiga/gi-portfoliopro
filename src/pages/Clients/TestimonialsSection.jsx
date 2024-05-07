// import PropTypes from "prop-types";
import { NavigateBeforeSharp, NavigateNextSharp } from "@mui/icons-material";
import { Box, Card, IconButton, Slide, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import "./ClientsPage.css";

const TestimonialsSection = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const cardsPerPage = 3;
  const containerWidth = cardsPerPage * 300;
  const testimonialsArray = [
    {
      content: `Gissel is a leader. From her initial interview I knew that Gissel was
    competent, professional, and committed. Over the time I supervised
    Gissel I also learned that she was kind and lighthearted. Gissel
    approaches her work with a passion for helping in any way she can.`,
    },
    {
      content: `Efficient, enthusiastic, and passionate, these words perfectly
    describe Gissel. Gissel was a member of CHN's PrEP team for several
    years. Gissel's abilitiy to make patients feel comfortable while also
    being able to handle several competing tasks is impressive. We miss
    her sunny disposition. Gissel would be great addition to any team.`,
    },
    {
      content: `Gi is undoubtedly one of the most hardworking, dedicated, and talented
    developers that I’ve had the opportunity to collaborate with. Her
    ability to approach problems with enthusiasm and ambition was
    inspiring to experience as a fellow team member.`,
    },
    {
      content: `I know Gissel since 2012 when she started working under my management
      at Ecco Outsourcing Group. I've worked with Gissel in different
      projects and any task assigned, she has delivered beyond the
      expectations. I have known her an honest and hard-working person, a
      good friend, has good work ethics and exemplary skills. She is always
      a team player and proactively helping peers troubleshoot different
      situations faced in the organization. I strongly recommend Gissel as
      integral professional worker.`,
    },
    {
      content: `Gi is an incredibly talented and collaborative software engineer who I
    loved having on my team! She's very curious, asks great questions, and
    is always enthusiastic and proactive about taking on new challenges
    and helping her teammates.`,
    },
    {
      content: `It has been a pleasure to work with Gi @ Astrana Health. Gi is
    infinitely curious and served as a liaison between SE and the
    analytics group to document the relevance of arcane topics such as
    risk adjustment and quality measures to new products. Gi has the
    uncommon experience of building software AND working in clinical
    workflows. It shows. I continually sought Gi's feedback to ground my
    thinking and interpret new datasets.`,
    },
    {
      content: `Gi is a team player and a quick learner. She has a deep passion for
    improving healthcare access and quality for patients. She dives into
    various areas and performs in-depth research about product features.
    If you are looking for an A+ full-stack software engineer in
    healthcare, Gi would be the one.`,
    },
    {
      content: `Gi is wonderful software engineer who builds products with the end
    user in mind. During her time at Astrana Health, she was a core
    technical contributor to the company's care management software, from
    its initial beginnings as a prototype to a full-fledged product used
    by multiple care teams within the org. She's constantly looking for
    ways to grow and improve, asks excellent questions, and fosters a
    highly positive team atmosphere. I'm confident that she'd be a great
    addition to any tech team.`,
    },
    {
      content: `Gi's defining trait is her unbridled enthusiasm and positive energy.
    She received overwhelmingly positive feedback as our Milestone
    Celebration Captain, using FigJam to create collaborative game-like
    experiences to celebrate our team's successes. If you're looking for
    an engineer who can radically transform your culture for the better,
    you would be lucky to get Gi. I'd be remiss if I didn't also point out
    how dedicated Gi is to her craft. She is constantly learning and
    sharing her findings with her colleagues. She works hard to build
    robust healthcare software that aligns with the needs of patients. I
    recommend Gi as a software engineer for any full-stack application
    team, especially in healthcare.`,
    },
  ];
  const duplicateCards = useMemo(
    () =>
      testimonialsArray.map((item, idx) => (
        <Card
          key={idx}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: "300px",
            alignContent: "center",
            padding: 2,
          }}>
          <div className="container" style={{ heigh: "150px" }}>
            <p
              className="text-3"
              style={{
                color: "#FFFFFF",
                fontSize: "14px",
                fontFamily: "Lato",
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
        color: "#C7A03B",
        fontFamily: "Times New Roman",
        fontSize: "34px",
        padding: 0,
        margin: 0,
        lineHeight: 1,
        // border: "1px solid olive",
      }}>
      <p
        style={{
          color: "#C7A03B",
          fontFamily: "Times New Roman",
          fontSize: "34px",
          padding: 0,
          margin: 0,
        }}>
        TESTIMONIALS
      </p>
      <p
        style={{
          color: "#FFFFFF",
          fontFamily: "Times New Roman",
          fontSize: "24px",
          padding: 0,
          margin: 0,
        }}>
        Feedback from former colleagues, clients, and supervisors{" "}
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
        <IconButton
          onClick={handlePrevPage}
          sx={{ margin: 5, color: "#FFFFFF" }}
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

            color: "#FFFFFF",
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

TestimonialsSection.propTypes = {};

export default TestimonialsSection;
