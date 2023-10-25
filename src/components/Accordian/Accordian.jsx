import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordian.module.css";
function Accordian() {
  return (
    <div className={styles.accordionContainer}>
      <h1
        style={{ textAlign: "center", fontSize: "3.5rem", marginTop: "2rem" }}
      >
        FAQs
      </h1>
      <Accordion
        className={styles.accordion}
        sx={{
          "& .MuiTypography-root": {
            fontSize: "1.5rem",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "success.light", fontSize: "4rem" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is Qtify free to use ?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetail}>
          <Typography>
            Yes, it is😉.. but for better experience we have subscription plan
            as well..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        sx={{
          "& .MuiTypography-root": {
            fontSize: "1.5rem",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "success.light", fontSize: "4rem" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetail}>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Accordian;
