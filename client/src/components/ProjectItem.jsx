import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const ProjectItem = ({ title, img, about, techs, position, breadcrumbs }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Row style={{ marginTop: 10 }}>
      <Accordion
        sx={{
          backgroundColor: "black",
          color: "white",
          p: 0,
          m: 0,
          borderTop: "1px solid grey",
        }}
      >
        <AccordionSummary onClick={handleToggle}>
          <h4 className="name">{title}</h4>
          <ArrowIcon
            className={`rotateIcon ${expanded ? "down" : "up"}`}
            style={{ marginLeft: "auto" }}
          />
        </AccordionSummary>
        <AccordionDetails sx={{ m: 0 }}>
          <Box
            component="span"
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleToggle}
          ></Box>
          <Box
            sx={{
              pb: 6,
              // borderBottom: "1px solid grey",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="intro p-4" style={{ textAlign: "left" }}>
              <Link href="https://usetract.com">
                <img
                  src={img}
                  className="p-4 px-0"
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt=""
                />
              </Link>

              <p className="boldsub pt-4"> 📝 ABOUT: </p>

              <p className="intro" style={{ textAlign: "left" }}>
                {about}
              </p>
              <p className="boldsub pt-4"> 🤖 TECHS: </p>

              <p className="intro" style={{ textAlign: "left" }}>
                {techs}
              </p>
              <p className="boldsub pt-4"> 👨‍💻 MY POSITION: </p>

              <p className="intro" style={{ textAlign: "left" }}>
                {position}
              </p>

              <Breadcrumbs
                separator=" "
                aria-label="breadcrumb1"
                className="d-flex px-0 p-4 "
              >
                {breadcrumbs}
              </Breadcrumbs>
            </div>
          </Box>
          {/* </div> */}
        </AccordionDetails>
      </Accordion>
    </Row>
  );
};

export default ProjectItem;
