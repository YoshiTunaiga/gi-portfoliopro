import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { softSkillsDetails } from "../resumeData";
import { StarPurple500Sharp } from "@mui/icons-material";
import "../ResumePage.css";

const SoftSkills = () => {
  return (
    <div key="programming-skills">
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
        }}>
        {softSkillsDetails.map((skill, index) => (
          <ListItem key={index} sx={{ padding: 1 }}>
            <ListItemIcon sx={{ color: "#c7a03b" }}>
              <StarPurple500Sharp />
            </ListItemIcon>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SoftSkills;
