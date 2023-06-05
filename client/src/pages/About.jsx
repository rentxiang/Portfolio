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

function About() {
  <style>
    font-family: input-mono, monospace;
    font-weight: 400;
    font-style: italic;
  </style>
  return (
    <Container style={{ height: '100vh' }}>
      <Row className="d-flex align-items-center justify-content-center" style={{ height: '90%' }}>
        <Col lg={6} md={6} xs={12} className="p-4">

          <h1 className='name'>Tianxiang Ren</h1>
          <br/>
          <p className='intro'>Hi, there! 👋 I am an aspiring software developer and enjoy discovering new ideas and technologies while diving. Currently I am pursuing my Masters in Information Systems at Northeastern University, I have proficient technical skills in software and web development. </p>
          <p className='intro'>I am passionate about solving complex business problems and my academic experience served me well in developing my collaboration skills. 
I am looking for an internship position in Summer or coop in Fall as a Software Developer. Please feel free to get in touch with me on LinkedIn or via email.</p>
          <div>
          <br/>
          <a href="https://www.linkedin.com/in/rentxiang/" className="p-3">
          <GitHubIcon color="action" fontSize="large" />
          </a>
          <a href="https://github.com/rentxiang" className="p-3">
          <LinkedInIcon color="action" fontSize="large" />
          </a>
          <a href="https://rentxiang@gmail.com" className="p-3">
          <EmailIcon color="action" fontSize="large" />
          </a>
          </div>
        </Col>
        <Col lg={3} md={6} xs={12} className="p-4">
          <img src={Dylan} className="App-logo" alt="logo" />
        </Col>
      </Row>
      <hr/>
      {/* <Projects/> */}

      
    </Container>
  );
}

export default About;