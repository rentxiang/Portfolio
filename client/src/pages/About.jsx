import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Box, Typography } from "@mui/material";
import Dylan from "../assets/kid_Dylan.jpeg";
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



function About() {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/me">
     <span className='intro'>About Me</span> 
    </Link>,
    // <Link underline="hover" key="1" color="inherit" href="/contact">
    //   <span className='intro'>Contact</span> 

    // </Link>,
  //   <Link underline="hover" key="1" color="inherit" href="/about">
  //      <span className='intro'>About</span> 

  // </Link>
  ];

  return (
    <section>
    <Container>
      {/* <Row>
          <Breadcrumbs separator="-" aria-label="breadcrumb" className="d-flex p-7 align-items-center justify-content-center ">
            {breadcrumbs}
          </Breadcrumbs>
      </Row> */}
      <Navbar/>
      <Row className="d-flex p-7 align-items-center justify-content-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Col lg={8} md={8} className="p-4">
          <a href='/me'><h1 className='name py-4'  style={{ textAlign: 'left' }}><ArrowForwardIosIcon xs={{fontSize:"large", color:"red"}}/> Tianxiang Ren</h1></a>
          <br/>
          {/* <p className='intro'>Hi, there! 👋 I am an aspiring full-stack developer specializing in MERN stack Front-end and Back-end jobs. </p>
          <p className='intro'>Also who will surprise you with exceptional experience.</p> */}
          {/* <p className='intro'>Hi, there! 👋 My name is Tianxiang Ren, based in San Francisco bay area.  </p> */}
          <p className='intro' style={{ textAlign: 'left' }}>👋 Hi, there! I am an aspiring software developer who enjoys discovering new ideas and technologies while diving.  </p>
          <p className='intro' style={{ textAlign: 'left' }}>Currently I am pursuing my Masters in Information Systems at Northeastern University, interning with <Link underline="hover" key="1" color="inherit" href="https://usetract.com"><span className='bold'>TRACT</span></Link> as a software development intern.</p>
          <p className='intro' style={{ textAlign: 'left' }}>I am a full-stack developer specializing in MERN stack Front-end and Back-end jobs. I am looking for a intern position this year or new grad job in 2024. Please feel free to get in touch with me on LinkedIn or via email.</p>
          <div>
          <br/>
          <Row style={{marginTop:50}}>
            <div>
            <a href="https://www.linkedin.com/in/rentxiang/" className="p-3">
          <GitHubIcon color="action" fontSize="large" />
          </a>
          <a href="https://github.com/rentxiang" className="p-3">
          <LinkedInIcon color="action" fontSize="large" />
          </a>

          <a href="mailto:rentxiang@gmail.com" className="p-3">
          <EmailIcon color="action" fontSize="large" />
          </a>
          
            </div>

          </Row>
          
          
          </div>
        </Col>
        <Col lg={2} md={2} className="p-4">
          <img src={Dylan} className="App-logo" alt="logo" />
        </Col>
      </Row>
      <div >
      <Row style={{paddingTop:0}} id="projects">
      <hr />

        <Projects  />
      </Row>
      </div>
      
      <Footer/>
    </Container>
    </section>

    

  );
}

export default About;