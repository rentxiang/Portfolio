import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import Dylan from "../assets/kid_Dylan.jpeg";
import PixelDylan from "../assets/kid_Dylan_Pixel2.jpg"
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbar from '../components/Navbar';
import  { useState, useEffect } from 'react';
import Fade from "@mui/material/Fade";



function Home() {

  // const breadcrumbs = [
  //   <Link underline="hover" key="1" color="inherit" href="/me">
  //    <span className='intro'>About Me</span> 
  //   </Link>,
  //   // <Link underline="hover" key="1" color="inherit" href="/contact">
  //   //   <span className='intro'>Contact</span> 

  //   // </Link>,
  // //   <Link underline="hover" key="1" color="inherit" href="/about">
  // //      <span className='intro'>About</span> 

  // // </Link>
  // ];


  const [textProgress, setTextProgress] = useState(0);
  const [imageSrc, setImageSrc] = useState(Dylan);
  const [line, setLine] =useState("");

  const handleMouseOver = () => {
    setLine(":)")
    setImageSrc(PixelDylan);
  };

  const handleMouseOut = () => {
    setLine("")

    setImageSrc(Dylan);
  };

  const loadingTexts = [
    // "👋 Hi, there! I am an aspiring software developer who enjoys discovering new ideas and technologies while diving.",
    // "Currently I am pursuing my Masters in Information Systems at Northeastern University, interning at TRACT as a software development intern.",
    // "I am a full-stack developer specializing in MERN stack Front-end and Back-end jobs. I am looking for an intern position this year or a new grad job in 2024. Please feel free to get in touch with me on LinkedIn or via email."
    "Tianxiang Ren"
  ];
 

  useEffect(() => {
    const totalTextLength = loadingTexts.reduce((total, text) => total + text.length, 0);
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
      
      {/* <Row>
          <Breadcrumbs separator="-" aria-label="breadcrumb" className="d-flex p-7 align-items-center justify-content-center ">
            {breadcrumbs}
          </Breadcrumbs>
      </Row> */}
      <Navbar/>

      <Row className="d-flex p-7 align-items-center justify-content-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
        <Col lg={8} md={8} className="p-4">
            {loadingTexts.map((text, index) => (
              <a href='/me'><h1 className='name py-4'  style={{ textAlign: 'left' }}><ArrowForwardIosIcon xs={{fontSize:"large", color:"red"}}/> {text.substring(0, textProgress)}</h1></a>

            ))}
          {/* <a href='/me'><h1 className='name py-4'  style={{ textAlign: 'left' }}><ArrowForwardIosIcon xs={{fontSize:"large", color:"red"}}/> Tianxiang Ren</h1></a> */}
          <br/>
          <Fade in={true} timeout={3000}>

          <div>
          <p className='intro' style={{ textAlign: 'left' }}>👋 Hi, there! I am an aspiring software developer who enjoys discovering new <br />ideas and technologies while diving.  </p>
          <p className='intro' style={{ textAlign: 'left' }}>Currently I am pursuing my Masters in Information Systems at Northeastern University.</p>
          <p className='intro' style={{ textAlign: 'left' }}>I am a full-stack developer specializing in MERN stack Front-end and Back-end jobs. I am looking for an intern position this year or new grad job in 2024. Please feel free to get in touch with me on  
          <Link underline="none" key="2" color="inherit" href="https://www.linkedin.com/in/rentxiang/"> LinkedIn</Link> or via <Link underline="none" key="3" color="inherit" href="mailto:rentxiang@gmail.com">email</Link>.</p>
          </div>
          </Fade>
          {/* <div>
            {loadingTexts.map((text, index) => (
              <p key={index} className='intro' style={{ textAlign: 'left' }}>
                {text.substring(0, textProgress)}
              </p>
            ))}
          </div> */}
          <div>
          <br/>
          <Row style={{marginTop:50}}>
            {/* <div>
            <a href="https://www.linkedin.com/in/rentxiang/" className="p-3">
          <GitHubIcon color="" fontSize="large" />
          </a>
          <a href="https://github.com/rentxiang" className="p-3">
          <LinkedInIcon color="" fontSize="large" />
          </a>

          <a href="mailto:rentxiang@gmail.com" className="p-3">
          <EmailIcon color="" fontSize="large" />
          </a>
          
            </div> */}

          </Row>
          
          
          </div>
        </Col>

        <Col lg={2} md={2} className="p-4 pt-0">
        <Fade in={true} timeout={3000}>

        <img src={imageSrc} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="App-logo" alt="logo"  />
        {/* <p className='intro'>{line}</p> */}
        </Fade>
        </Col>
      </Row>
      <Row className="d-flex p-7 align-items-center justify-content-center" style={{paddingTop:100, marginTop:0}}>
        <Col lg={8} md={8}>
      <hr/>

        </Col>
        <Col lg={2} md={2}  />

      </Row>
      <Row style={{paddingTop:100, marginTop:0}} id="projects">

        <Projects  id="projects"/>
      </Row>
      
      <Footer/>
    </Container>
    </section>

    

  );
}

export default Home;