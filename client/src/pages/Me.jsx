import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Box, Typography } from "@mui/material";
import Dylan from "../assets/Dylan.jpg";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Navbar from "../components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import huihui from "../assets/huihui.png";
import paopao from "../assets/paopao.jpg";
import Fade from "@mui/material/Fade";
import SubdirectoryArrowRightSharpIcon from '@mui/icons-material/SubdirectoryArrowRightSharp';
import TechStack from "../components/TechStack";

function Me() {
  const breadcrumbs = [
      <Link
      underline="hover"
      key="1"
      color="inherit"
      href="Resume_Tianxiang_Ren.pdf"
      target="_blank"
    >
      <span className="intro">
        <SubdirectoryArrowRightSharpIcon /> Get My Resume
      </span>
    </Link>,
      <div style={{paddingLeft:"150px"}}> 
      <a href="https://www.linkedin.com/in/rentxiang/" className="p-3">
        <LinkedInIcon color="" fontSize="large" />
      </a>
      <a href="https://github.com/rentxiang" className="p-3">
        <GitHubIcon color="" fontSize="large" />
      </a>

      <a href="mailto:rentxiang@gmail.com" className="p-3">
        <EmailIcon color="" fontSize="large" />
      </a>
      </div>

  ];

  const [textProgress, setTextProgress] = useState(0);
  const loadingTexts = [
    // "👋 Hi, there! I am an aspiring software developer who enjoys discovering new ideas and technologies while diving.",
    // "Currently I am pursuing my Masters in Information Systems at Northeastern University, interning at TRACT as a software development intern.",
    // "I am a full-stack developer specializing in MERN stack Front-end and Back-end jobs. I am looking for an intern position this year or a new grad job in 2024. Please feel free to get in touch with me on LinkedIn or via email."
    "ABOUT ME",
  ];

  useEffect(() => {
    const totalTextLength = loadingTexts.reduce(
      (total, text) => total + text.length,
      0
    );
    const increment = 1;

    const timer = setInterval(() => {
      setTextProgress((prevProgress) => prevProgress + increment);
    }, 100);

    if (textProgress >= totalTextLength) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <section>
      <Container>
        <Navbar />
        <Row
          className="d-flex p-7 align-items-center justify-content-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Col lg={7} md={8} className="p-4">
            {loadingTexts.map((text, index) => (
              <h1 className="name py-4" style={{ textAlign: "left" }}>
                <ArrowForwardIosIcon xs={{ fontSize: "large", color: "red" }} />{" "}
                {text.substring(0, textProgress)}
              </h1>
            ))}
            <br />
            <Fade in={true} timeout={3000}>
              <div>
                <p className="intro" style={{ textAlign: "left" }}>
                  "Sincere, Courageous, Resolute" <br /> -- I love what I do,
                  and this is a truthful statement.
                </p>
              </div>
            </Fade>
            <Fade in={true} timeout={5000}>
              <div>
                <p className="intro" style={{ textAlign: "left" }}>
                  My name is Tianxiang Ren, based in San Francisco bay area.{" "}
                </p>
                {/* <p className='intro' style={{ textAlign: 'left' }}>Inspired by Blade Runner. I am passinate about web development and believe that AI is the next future</p> */}
                <p className="intro" style={{ textAlign: "left" }}>
                  I am looking for an intern position this year or new grad job
                  in 2024. Please feel free to get in touch with me on LinkedIn
                  or via email at: rentxiang@gmail.com.
                </p>
              </div>
            </Fade>

            <Fade in={true} timeout={7000}>

            <div>
              <br />

              <div style={{ textAlign: "left", marginTop: 100 }}>
                <Breadcrumbs
                  separator=" "
                  aria-label="breadcrumb"
                  className="d-flex p-7 align-items-left justify-content-left "
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </div>
            </div>
            </Fade>
          </Col>
          <Col lg={3} md={2} className="p-4">
            <img src={Dylan} style={{ width: '100%' }} alt="logo" />
          </Col>
        </Row>
        <Fade in={true} timeout={8000}>
          <div>
            <Row
              className="d-flex align-items-center justify-content-center"
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
              }}
            >
              <hr />


              <Col lg={10} md={10} className="p-4" >
                <h1 className="name py-5" style={{ textAlign: "left" }}>LIFE</h1>
                <p className="intro" style={{ textAlign: "left" }}>
                  I enjoy traveling and gaining diverse perspectives from
                  different people. On top of that, I am a pet enthusiast - I
                  have a delightful Pug dog 🐶 and an adorable mix of a Calico
                  and Siamese cat 🐱, and I absolutely adore them.
                </p>
              </Col>
            </Row>

            <Row
              className="d-flex align-items-center justify-content-center"
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
              }}
            >
              <Col lg={5} md={5} className="p-4">
                <img src={huihui} style={{ width: "60%" }} alt="logo" />
              </Col>
              <Col lg={5} md={5} className="p-4">
                <p className="intro" style={{ textAlign: "left" }}>
                  "Hui hui" means "grey grey" in Mandarin, his name is derived
                  from Xiao Huihui in the Chinese animated series "Pleasant Goat
                  and Big Big Wolf."
                </p>
                <p className="intro" style={{ textAlign: "left" }}>
                  Huihui accompanied me throughout my school years. It's been 2
                  years I haven't been back home and I miss him.
                </p>
              </Col>
            </Row>
            <Row
              className="d-flex align-items-center justify-content-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
              }}
            >
              <Col lg={5} md={5} className="p-4">
                <p className="intro" style={{ textAlign: "left" }}>
                  The bubble, paopao is my lovely princess and she's beautiful.
                  I adopted paopao from one of my friend since June.
                </p>
                <p className="intro" style={{ textAlign: "left" }}>
                  She is very shy and timid, yet incredibly affectionate and
                  clingy. She is becoming my sweetheart!
                </p>
              </Col>
              <Col lg={5} md={5} className="p-4">
                <img src={paopao} style={{ width: 300 }} alt="logo" />
              </Col>

              <hr />
            </Row>
          </div>
        </Fade>
        <Footer />
      </Container>
    </section>
  );
}

export default Me;
