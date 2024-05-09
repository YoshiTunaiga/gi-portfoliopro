import PropTypes from "prop-types";
import TestimonialsSection from "./TestimonialsSection";
import { StyledTestimonialsContainer } from "./styles";

const TestimonialsPage = ({ id = "" }) => {
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

  return (
    <StyledTestimonialsContainer id={id}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          margin: "80px 100px",
        }}>
        <TestimonialsSection testimonialsArray={testimonialsArray} />
      </div>
    </StyledTestimonialsContainer>
  );
};

TestimonialsPage.propTypes = {
  id: PropTypes.string,
};

export default TestimonialsPage;
