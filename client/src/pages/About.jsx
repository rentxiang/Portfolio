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

function About() {

  return (
    <section>
    <Container>
      <Row className="d-flex p-7 align-items-center justify-content-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Col lg={6} md={6} className="p-4">

          <h1 className='name' >Tianxiang Ren</h1>
          <br/>
          <p className='intro'>Hi, there! 👋 I am an aspiring software developer who enjoys discovering new ideas and technologies while diving.  </p>
          <p className='intro'>Currently I am pursuing my Masters in Information Systems at Northeastern University, interning with <span className='bold' ><a href="https://usetract.com" target="_blank" >TRACT</a></span> as a software development intern.</p>
          <p className='intro'>I have proficient technical skills in software and web development and passionate about solving complex business problems. Please feel free to get in touch with me on LinkedIn or via email.</p>
          <div>
          <br/>
          <a href="https://www.linkedin.com/in/rentxiang/" className="p-3">
          <GitHubIcon color="action" fontSize="large" />
          </a>
          <a href="https://github.com/rentxiang" className="p-3">
          <LinkedInIcon color="action" fontSize="large" />
          </a>
          {/* <a href="https://rentxiang@gmail.com" className="p-3">
          <EmailIcon color="action" fontSize="large" />
          </a> */}
          </div>
        </Col>
        <Col lg={3} md={6} className="p-4">
          <img src={Dylan} className="App-logo" alt="logo" />
        </Col>
      </Row>
      
      <Row style={{paddingTop:0}} >
      <hr />

        <Projects/>
      </Row>
      <Footer/>
    </Container>
    </section>

    

  );
}

export default About;